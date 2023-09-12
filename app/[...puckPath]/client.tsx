"use client";

import { Render } from "@measured/puck";
import type { Data } from "@measured/puck";

import config from "../../puck.config";

export function Client({ data }: { data: Data; path: string }) {
  if (!data) {
    return null;
  }

  return <Render config={config} data={data} />;
}
