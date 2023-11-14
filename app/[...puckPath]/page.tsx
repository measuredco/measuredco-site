import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Render } from "@measured/puck/rsc";
import config from "../../puck.config";

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

  return <Render config={config} data={pageRes.data?.data} />;
}

export const dynamic = "force-static";
