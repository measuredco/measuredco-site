import { ComponentData, Data } from "@measured/puck";
import { processMarkdown } from "./markdown";
import { supabase } from "./supabase";

export const getPosts = async (siteUrl: string) => {
  const blogPath = "/blog";
  const blogPageRes = await supabase
    .from("puck")
    .select("*")
    .eq("path", blogPath)
    .maybeSingle();
  const blogPageData = blogPageRes?.data?.data as Data;
  const archivePosts = blogPageData?.content?.filter(
    (item: ComponentData) => item.type === "Archive"
  )?.[0]?.props?.posts;
  const posts = [];

  for (const { slug } of archivePosts) {
    const postPath = `${blogPath}/${slug}`;
    const postPageRes = await supabase
      .from("puck")
      .select("*")
      .eq("path", postPath)
      .maybeSingle();
    const postData = postPageRes?.data?.data as Data;
    const post = postData?.content?.find(
      (item: ComponentData) => item.type === "Post"
    )?.props;
    const postDescription = postData?.root?.props?.description;
    const postLink = `${siteUrl}${postPath}`;

    posts.push({
      author: post.author,
      content: processMarkdown(post.content)?.value,
      date: new Date(post.date),
      description: postDescription || "A blog post from Measured.",
      id: postLink,
      link: postLink,
      title: post.title,
    });
  }

  return posts.sort((a, b) => b.date - a.date);
};