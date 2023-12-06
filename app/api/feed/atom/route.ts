import { NextResponse } from "next/server";

import { generateFeed } from "../../../../lib/generate-feed";

export const revalidate = 86400;

export async function GET() {
  const feed = await generateFeed();

  return new NextResponse(feed.atom1(), {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
