"use client";

import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { useEffect } from "react";

import { createSupabaseBrowserClient } from "../../lib/supabase-browser";
import { useUser } from "../../lib/use-user";

const supabase = createSupabaseBrowserClient();

export default function Login() {
  const user = useUser();

  useEffect(() => {
    if (user) {
      window.location.href = "/edit";
    }
  }, [user]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      />
    </div>
  );
}
