import fs from "fs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Data } from "@measured/puck";

import { Client } from "./client";
import resolvePuckPath from "./resolve-puck-path";

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

  // const data: Data = (
  //   await fetch(`${process.env.DEPLOY_URL}/api/puck`, {
  //     next: { revalidate: 0 },
  //   }).then((d) => d.json())
  // )[path];

  const dataString = fs.existsSync("database.json")
    ? fs.readFileSync("database.json", "utf-8")
    : null;

  const data: Data = JSON.parse(dataString || "{}")[path];

  return {
    title: data?.root?.title,
    description: data?.root?.description,
  };
}

export default async function Page({
  params,
}: {
  params: { puckPath: string[] };
}) {
  const { isEdit, path } = resolvePuckPath(params.puckPath);

  // const data = (
  //   await fetch(`${process.env.DEPLOY_URL}/api/puck`, {
  //     next: { revalidate: 0 },
  //   }).then((d) => d.json())
  // )[path];

  const dataString = fs.existsSync("database.json")
    ? fs.readFileSync("database.json", "utf-8")
    : null;

  const data: Data = JSON.parse(dataString || "{}")[path];

  console.log({ data });

  if (!data && !isEdit) {
    return notFound();
  }

  return <Client isEdit={isEdit} data={data} path={path} />;
}
