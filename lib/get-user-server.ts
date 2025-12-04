import { createSupabaseServerClient } from "./supabase-server";

export const getUserServer = async () => {
  const supabase = await createSupabaseServerClient();

  const userResponse = await supabase.auth.getUser();

  return userResponse.data.user;
};
