"use client";

import { Button, Puck, Render } from "@measured/puck";
import type { Data } from "@measured/puck";
import headingAnalyzer from "@measured/puck-plugin-heading-analyzer";

import config from "../../puck.config";
import { Save } from "react-feather";
import { Base } from "../../components";
import { User } from "@supabase/supabase-js";
import { useState } from "react";

const UserActions = ({ data, draftData, unsavedData, path }) => {
  const unsaved = JSON.stringify(unsavedData) !== JSON.stringify(draftData);
  const unpublished = JSON.stringify(draftData) !== JSON.stringify(data);

  return (
    <>
      <Base>
        {unsaved ? (
          <span>Unsaved&nbsp;changes</span>
        ) : unpublished ? (
          <span>Unpublished&nbsp;changes</span>
        ) : (
          "Published"
        )}
      </Base>
      <Button
        onClick={async () => {
          const res = await fetch("/api/puck", {
            body: JSON.stringify({ path, data: unsavedData, draft: true }),
            method: "post",
          });

          if (res.status !== 200) {
            alert(`Error: ${res.statusText} (${res.status})`);

            return;
          }

          alert("Saved successfully!");
        }}
        variant="secondary"
        icon={<Save size="16" />}
      >
        Save draft
      </Button>
    </>
  );
};

export function Client({
  data: initialData,
  draftData: initialDraftData,
  isEdit,
  path,
}: {
  data: Data;
  draftData: Data;
  isEdit: boolean;
  path: string;
}) {
  const [data, setData] = useState(initialData);
  const [draftData, setDraftData] = useState(initialDraftData);

  if (isEdit) {
    return (
      <Puck
        config={config}
        data={draftData}
        plugins={[headingAnalyzer]}
        headerPath={path}
        renderHeaderActions={({ data: unsavedData }) => {
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
                    color: "var(--color-grey-1)",
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
            </>
          );
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

  if (!data) {
    return null;
  }

  return <Render config={config} data={data} />;
}
