import { Feed } from "feed";

import content from "../content.json";
import { getPosts } from "./get-posts";

const { blogDescription, siteName, siteUrl } = content;

export const generateFeed = async () => {
  const feed = new Feed({
    copyright: `All rights reserved ${new Date().getFullYear()}, Measured Corporation Ltd`,
    description: blogDescription,
    favicon: `${siteUrl}/favicon.ico`,
    feedLinks: {
      atom: `${siteUrl}/feed.atom`,
      json: `${siteUrl}/feed.json`,
      rss2: `${siteUrl}/feed.xml`,
    },
    id: siteUrl,
    image: `${siteUrl}/social.png`,
    language: "en-gb",
    link: siteUrl,
    title: siteName,
  });
  const posts = await getPosts(siteUrl);

  // limit feed to 30 posts
  posts?.slice(0, 30).forEach((post) => {
    feed.addItem(post);
  });

  return feed;
};
