import content from "../content.json";
import { getPosts } from "../lib/get-posts";

const { siteUrl } = content;

export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/work",
    "/work/bt",
    "/work/hubble",
    "/blog",
    "/contact",
  ].map((route) => ({
    lastModified: new Date().toISOString(),
    url: `${siteUrl}${route}`,
  }));

  let posts = await getPosts(siteUrl);
  posts = posts?.length
    ? posts.map(({ date, link }) => ({
        lastModified: date,
        url: link,
      }))
    : [];

  let puckPosts = await getPosts(siteUrl, 1);
  puckPosts = puckPosts?.length
    ? puckPosts.map(({ date, link }) => ({
        lastModified: date,
        url: link,
      }))
    : [];

  return [...routes, ...posts, ...puckPosts];
}
