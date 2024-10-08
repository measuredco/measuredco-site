"use client";

import { Button, Puck, usePuck } from "@measured/puck";
import type { Data } from "@measured/puck";
import headingAnalyzer from "@measured/puck-plugin-heading-analyzer";

import config from "../../../puck.config";
import { Save } from "react-feather";
import { Base } from "../../../components";
import { useState } from "react";

export function Client({
  data: initialData,
  draftData: initialDraftData,
  path,
}: {
  data: Data;
  draftData: Data;
  path: string;
}) {
  const [data, setData] = useState(initialData);
  const [draftData, setDraftData] = useState(initialDraftData);

  return (
    <Puck
      config={config}
      data={draftData || {}}
      plugins={[headingAnalyzer]}
      headerPath={path}
      overrides={{
        headerActions: ({ children }) => {
          const {
            appState: { data: unsavedData },
          } = usePuck();

          const unsaved =
            JSON.stringify(unsavedData) !== JSON.stringify(draftData);
          const unpublished =
            JSON.stringify(draftData) !== JSON.stringify(data);

          return (
            <>
              <Base>
                <small
                  style={{
                    display: "flex",
                    color: "var(--color-grey-02)",
                    background: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  {unsaved ? (
                    <span>Unsaved&nbsp;changes</span>
                  ) : unpublished ? (
                    <span>Unpublished&nbsp;changes</span>
                  ) : (
                    "Published"
                  )}
                </small>
              </Base>
              <Button
                onClick={async () => {
                  const res = await fetch("/api/puck", {
                    body: JSON.stringify({
                      path,
                      data: unsavedData,
                      draft: true,
                    }),
                    method: "post",
                  });

                  if (res.status !== 200) {
                    alert(`Error: ${res.statusText} (${res.status})`);

                    return;
                  }

                  setDraftData(unsavedData);
                }}
                variant="secondary"
                icon={<Save size="16" />}
                disabled={!unsaved}
              >
                Save draft
              </Button>

              {children}
            </>
          );
        },
      }}
      onPublish={async (unsavedData: Data) => {
        const res = await fetch("/api/puck", {
          body: JSON.stringify({ path, data: unsavedData }),
          method: "post",
        });

        if (res.status !== 200) {
          alert(`Error: ${res.statusText} (${res.status})`);

          return;
        }

        setData(unsavedData);
        setDraftData(unsavedData);

        alert("Saved successfully!");
      }}
    />
  );
}
