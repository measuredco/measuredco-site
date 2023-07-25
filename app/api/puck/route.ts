import fs from "fs";
import { supabase } from "../../../lib/supabase";

import { NextResponse } from "next/server";

export async function GET() {
  const data = fs.existsSync("database.json")
    ? fs.readFileSync("database.json", "utf-8")
    : null;

  return NextResponse.json(JSON.parse(data || "{}"));
}

export async function POST(request: Request) {
  const postData = await request.json();

  const { path, data } = postData;

  const existingDataRes = await supabase
    .from("puck")
    .select("*")
    .eq("path", path)
    .maybeSingle();

  if (existingDataRes.status === 200 && existingDataRes.data) {
    console.log("Existing", existingDataRes.data, existingDataRes.status);
    const res = await supabase.from("puck").upsert({
      ...existingDataRes.data,
      last_edited_by: "Dev",
      updated_at: new Date(),
      data,
    });

    if (res.status === 201) {
      return NextResponse.json({ status: "ok" });
    }

    console.error(
      `Error writing to supabase: ${res.statusText} (${res.status})`
    );
  } else {
    const res = await supabase.from("puck").insert({
      created_at: new Date(),
      updated_at: new Date(),
      created_by: "Dev",
      last_edited_by: "Dev",
      path,
      data,
    });

    if (res.status === 201) {
      return NextResponse.json({ status: "ok" });
    }

    console.error(
      `Error writing to supabase: ${res.statusText} (${res.status})`
    );
  }

  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}

export const revalidate = 0;
