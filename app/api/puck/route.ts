import fs from "fs";
import { supabase } from "../../../lib/supabase";

import { NextResponse } from "next/server";
import { getUserServer } from "../../../lib/get-user-server";

export async function GET() {
  const data = fs.existsSync("database.json")
    ? fs.readFileSync("database.json", "utf-8")
    : null;

  return NextResponse.json(JSON.parse(data || "{}"));
}

export async function POST(request: Request) {
  const postData = await request.json();

  const user = await getUserServer();

  if (!user) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 401 }
    );
  }

  const { path, data, draft } = postData;

  const existingDataRes = await supabase
    .from("puck")
    .select("*")
    .eq("path", path)
    .maybeSingle();

  if (existingDataRes.status === 200 && existingDataRes.data) {
    const newData = {
      ...existingDataRes.data,
      updated_by: user.email,
      updated_at: new Date(),
      draft_data: data,
      [draft ? "draft_data" : "data"]: data,
    };

    const res = await supabase.from("puck").upsert(newData);

    if (res.status === 201) {
      return NextResponse.json({ status: "ok", data: newData });
    }

    console.error(
      `Error writing to supabase: ${res.statusText} (${res.status})`
    );
  } else {
    const newData = {
      created_at: new Date(),
      updated_at: new Date(),
      created_by: user.email,
      updated_by: user.email,
      path,
      draft_data: data,
      [draft ? "draft_data" : "data"]: data,
    };

    const res = await supabase.from("puck").insert(newData);

    if (res.status === 201) {
      return NextResponse.json({ status: "ok", data: newData });
    }

    console.error(
      `Error writing to supabase: ${res.statusText} (${res.status})`
    );
  }

  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}

export const revalidate = 0;
