import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Client } from "./client";
import resolvePuckPath from "./resolve-puck-path";
import { supabase } from "../../lib/supabase";

import { getUserServer } from "../../lib/get-user-server";

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

  if ((pageRes.status !== 200 || !pageRes.data?.data) && !isEdit) {
    return notFound();
  }

  let user;

  if (isEdit) {
    user = await getUserServer();

    if (!user) {
      return notFound();
    }
  }

  return (
    <Client
      isEdit={isEdit}
      data={pageRes.data?.data}
      draftData={isEdit ? pageRes.data?.draft_data || pageRes.data?.data : null}
      path={path}
    />
  );
}

export const dynamic = "force-dynamic";
