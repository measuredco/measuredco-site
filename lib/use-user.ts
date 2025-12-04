import { UserResponse } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";

import { createSupabaseBrowserClient } from "./supabase-browser";

export const useUser = () => {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [user, setUser] = useState<UserResponse["data"]["user"] | undefined>();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () => {
      setUser((await supabase.auth.getUser()).data.user);
    });

    // Cleanup
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

  return user;
};
