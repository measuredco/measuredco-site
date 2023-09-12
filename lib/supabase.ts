import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
  global: {
    fetch: async (url, options) => {
      const database = url.toString().split("v1/")[1].split("?")[0];

      const tags = [];

      if (database === "puck" && options.method === "GET") {
        const params = new URLSearchParams(url.toString().split("?")[1]);
        const path = params.get("path").replace("eq.", "");

        tags.push(path);
      }

      return fetch(url, { ...options, next: { tags } });
    },
  },
});
