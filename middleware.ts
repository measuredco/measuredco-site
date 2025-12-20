import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookies) {
          cookies.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  await supabase.auth.getSession();

  // Rewrite routes that match "/[...puckPath]/edit" to "/edit/[...puckPath]"
  if (req.nextUrl.pathname.endsWith("/edit")) {
    const pathWithoutEdit = req.nextUrl.pathname.split("/edit")[0];
    const pathWithEditPrefix = `/edit${pathWithoutEdit}`;

    return NextResponse.rewrite(new URL(pathWithEditPrefix, req.url));
  }

  // Disable "/edit/[...puckPath]"
  if (req.nextUrl.pathname.startsWith("/edit")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}
