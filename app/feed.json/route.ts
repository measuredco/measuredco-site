import { generateFeed } from "../../lib/generate-feed";

export const dynamic = "force-static";

export async function GET() {
  const feed = await generateFeed();

  return new Response(feed.json1(), {
    headers: { "Content-Type": "application/feed+json" },
  });
}
