import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { puckMiddleware } from "next-puck-experimental";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const sessionResponse = await supabase.auth.getSession();

  const isLoggedIn = !!sessionResponse.data?.session?.user;

  if (req.nextUrl.pathname.endsWith("/edit") && !isLoggedIn) {
    return NextResponse.error();
  }

  return puckMiddleware(req);
}
