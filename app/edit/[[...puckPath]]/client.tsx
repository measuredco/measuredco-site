"use client";

import { Button, type Data, Puck, usePuck } from "@measured/puck";
import { useState } from "react";

import config from "../../../puck/config";

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
      headerPath={path}
      overrides={{
        headerActions: ({ children }) => {
          const {
            appState: { data: unsavedData },
            // eslint-disable-next-line react-hooks/rules-of-hooks
          } = usePuck();
          const unpublished =
            JSON.stringify(draftData) !== JSON.stringify(data);
          const unsaved =
            JSON.stringify(unsavedData) !== JSON.stringify(draftData);

          return (
            <>
              <small
                style={{
                  alignItems: "center",
                  background: "white",
                  color: "var(--color-grey-03)",
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
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

        // alert("Saved successfully!");
      }}
    />
  );
}
