import fs from "fs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Data } from "@measured/puck";

import { Client } from "./client";
import resolvePuckPath from "./resolve-puck-path";
import { supabase } from "../../lib/supabase";

export async function generateMetadata({
  params,
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const { isEdit, path } = resolvePuckPath(params.puckPath);

  if (isEdit) {
    return {
      title: `${path ? `Puck path ${path}` : "Puck"}`,
    };
  }

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
  const { isEdit, path } = resolvePuckPath(params.puckPath);

  const pageRes = await supabase
    .from("puck")
    .select("*")
    .eq("path", path)
    .maybeSingle();

  if (pageRes.status !== 200 && !isEdit) {
    return notFound();
  }

  return <Client isEdit={isEdit} data={pageRes.data?.data} path={path} />;
}
