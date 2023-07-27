import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const getUserServer = async () => {
  const supabase = createServerComponentClient({ cookies });

  const userResponse = await supabase.auth.getUser();

  return userResponse.data.user;
};
