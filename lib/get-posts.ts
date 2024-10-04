import content from "../content.json";
import { processMarkdown } from "./markdown";
import { getPageRes } from "./get-page-res";
import { Props } from "../puck.config";

const { blogPostDescription } = content;

export const getPosts = async (siteUrl: string) => {
  const blogPath = "/blog";
  const blogPageRes = await getPageRes(blogPath);
  const blogPageData = blogPageRes?.data?.data;
  const archivePosts = (
    blogPageData?.content?.filter((item) => item.type === "Archive")?.[0]
      ?.props as Props["Archive"]
  ).posts;
  const posts = [];

  for (const { slug } of archivePosts) {
    const postPath = `${blogPath}/${slug}`;
    const postPageRes = await getPageRes(postPath);
    const postData = postPageRes?.data?.data;
    const post = postData?.content?.find((item) => item.type === "Post")
      ?.props as Props["Post"];

    if (!post) {
      return;
    }

    const postDescription =
      postData?.root?.description || postData?.root?.props?.description;
    const postLink = `${siteUrl}${postPath}`;

    posts.push({
      author: post.author,
      content: processMarkdown(post.content)?.value,
      date: post.modifiedDate
        ? new Date(post.modifiedDate)
        : new Date(post.date),
      description: postDescription || blogPostDescription,
      id: postLink,
      link: postLink,
      published: new Date(post.date),
      title: post.title,
    });
  }

  return posts.sort((a, b) => b.date - a.date);
};
