import { createBrowserClient } from "@supabase/ssr";
import { UserResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export const useUser = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

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
