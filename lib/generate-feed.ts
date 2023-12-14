import { Feed } from "feed";

import { getPosts } from "./get-posts";

export const generateFeed = async () => {
  const siteUrl = "https://measured.co";
  const feed = new Feed({
    copyright: `All rights reserved ${new Date().getFullYear()}, Measured Corporation Ltd`,
    description: "A blog from Measured, the React and UI specialists.",
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
    title: "Measured",
  });
  const posts = await getPosts(siteUrl);

  // limit feed to 30 posts
  posts.slice(0, 30).forEach((post) => {
    feed.addItem(post);
  });

  return feed;
};
