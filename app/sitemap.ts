import content from "../content.json";
import { getPosts } from "../lib/get-posts";

const { siteUrl } = content;

export default async function sitemap() {
  const routes = ["", "/blog"].map((route) => ({
    lastModified: new Date().toISOString(),
    url: `${siteUrl}${route}`,
  }));
  let posts = await getPosts(siteUrl);
  posts = posts.map(({ date, link }) => ({
    lastModified: date,
    url: link,
  }));

  return [...routes, ...posts];
}
