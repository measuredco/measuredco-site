import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

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
