import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  await supabase.auth.getSession();

  if (req.nextUrl.pathname.endsWith("/edit")) {
    res.headers.set("x-middleware-cache", "no-cache");
  }

  return res;
}
