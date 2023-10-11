import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Client } from "./client";
import { supabase } from "../../lib/supabase";
import resolvePuckPath from "../../lib/resolve-puck-path";

export async function generateMetadata({
  params,
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const { path } = resolvePuckPath(params.puckPath);

  const pageRes = await supabase
    .from("puck")
    .select("*")
    .eq("path", path)
    .maybeSingle();

  return {
    title: pageRes?.data?.data?.root?.title || "Page",
    description: pageRes?.data?.data?.root?.description,
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

  if (pageRes.status !== 200 || !pageRes.data?.data) {
    return notFound();
  }

  return <Client data={pageRes.data?.data} path={path} />;
}

export const dynamic = "force-static";
