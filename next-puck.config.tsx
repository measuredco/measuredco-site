import { NextPuckConfig } from "next-puck-experimental";
import { supabase } from "./lib/supabase";
import { revalidateTag } from "next/cache";
import { getUserServer } from "./lib/get-user-server";

const config: NextPuckConfig = {
  /**
   * next-puck configuration
   *
   * These are called from the next-puck controlled routes in /app/[...puckPath] and /app/puck.
   *
   * If you eject from next-puck, you may wish to move them inline into your routes.
   */

  readPageServer: async (path) => {
    const pageRes = await supabase
      .from("puck")
      .select("*")
      .eq("path", path)
      .maybeSingle();

    return pageRes.data?.data;
  },

  writePageServer: async (request) => {
    const postData = await request.json();

    const user = await getUserServer();

    if (!user) {
      return;
    }

    const { path, data, draft } = postData;

    const existingDataRes = await supabase
      .from("puck")
      .select("*")
      .eq("path", path)
      .maybeSingle();

    if (existingDataRes.status === 200 && existingDataRes.data) {
      const newData = {
        ...existingDataRes.data,
        updated_by: user.email,
        updated_at: new Date(),
        draft_data: data,
        [draft ? "draft_data" : "data"]: data,
      };

      const res = await supabase.from("puck").upsert(newData);

      if (res.status === 201) {
        // Purge Next.js supabase cache
        revalidateTag(path);

        return;
      }

      console.error(
        `Error writing to supabase: ${res.statusText} (${res.status})`
      );
    } else {
      const newData = {
        created_at: new Date(),
        updated_at: new Date(),
        created_by: user.email,
        updated_by: user.email,
        path,
        draft_data: data,
        [draft ? "draft_data" : "data"]: data,
      };

      const res = await supabase.from("puck").insert(newData);

      if (res.status === 201) {
        // Purge Next.js supabase cache
        revalidateTag(path);

        return;
      }

      console.error(
        `Error writing to supabase: ${res.statusText} (${res.status})`
      );
    }
  },
};

export default config;
