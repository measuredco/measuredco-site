"use client";

import { Puck, Render } from "@measured/puck";
import type { Data } from "@measured/puck";

import config from "../../puck.config";

export function Client({
  data,
  isEdit,
  path,
}: {
  data: Data;
  isEdit: boolean;
  path: string;
}) {
  if (isEdit) {
    return (
      <Puck
        config={config}
        data={data}
        onPublish={async (data: Data) => {
          const res = await fetch("/api/puck", {
            body: JSON.stringify({ path, data }),
            method: "post",
          });

          if (res.status !== 200) {
            alert(`Error: ${res.statusText} (${res.status})`);

            return;
          }

          alert("Saved successfully!");
        }}
      />
    );
  }

  return <Render config={config} data={data} />;
}
