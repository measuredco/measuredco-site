import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Client } from "./client";
import resolvePuckPath from "../../../lib/resolve-puck-path";
import { supabase } from "../../../lib/supabase";

import { getUserServer } from "../../../lib/get-user-server";

export async function generateMetadata({
  params,
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const { path } = resolvePuckPath(params.puckPath);

  return {
    title: `${path ? `Puck path ${path}` : "Puck"}`,
  };
}

export default async function Page({
  params,
}: {
  params: { puckPath: string[] };
}) {
  const { path } = resolvePuckPath(params.puckPath);

  const pageRes = await supabase
    .from("puck")
    .select("*")
    .eq("path", path)
    .maybeSingle();

  const user = await getUserServer();

  if (!user) {
    return notFound();
  }

  return (
    <Client
      data={pageRes.data?.data}
      draftData={pageRes.data?.draft_data || pageRes.data?.data}
      path={path}
    />
  );
}
