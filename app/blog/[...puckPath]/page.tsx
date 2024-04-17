import { ComponentData, Data } from "@measured/puck";
import { Render } from "@measured/puck/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import content from "../../../content.json";
import resolvePuckPath from "../../../lib/resolve-puck-path";
import { supabase } from "../../../lib/supabase";
import config from "../../../puck.config";

const { blogPostDescription, openGraphLocale, siteName, siteUrl, title } =
  content;

const getPageRes = (path: string) =>
  supabase.from("puck").select("*").eq("path", path).maybeSingle();

export { viewport } from "../../page";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const blogPath = "/blog";
  const { path } = resolvePuckPath(params.puckPath);
  const pageRes = await getPageRes(`${blogPath}${path}`);
  const data = pageRes?.data?.data as Data;
  const root = data?.root;
  const pageDescription =
    root?.description || root?.props?.description || blogPostDescription;
  const pageTitle = root?.title || root?.props?.title || "Post";
  const pageUrl = `${siteUrl}${blogPath}${path}`;
  const post = data?.content?.find(
    (item: ComponentData) => item.type === "Post"
  )?.props;
  const postDate = post?.date ? new Date(post.date).toISOString() : "";
  const postModifiedDate = post?.modifiedDate
    ? new Date(post.modifiedDate).toISOString()
    : "";

  return {
    alternates: { canonical: pageUrl },
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      authors: [post?.author],
      description: pageDescription,
      images: [
        {
          alt: title,
          height: 600,
          url: "/social.png",
          type: "image/png",
          width: 1200,
        },
      ],
      locale: openGraphLocale,
      modifiedTime: postModifiedDate || postDate,
      publishedTime: postDate,
      siteName,
      title: pageTitle,
      type: "article",
      url: pageUrl,
    },
    title: pageTitle,
  };
}

export default async function Page({
  params,
}: {
  params: { puckPath: string[] };
}) {
  const blogPath = "/blog";
  const { path } = resolvePuckPath(params.puckPath);
  const pageRes = await getPageRes(`${blogPath}${path}`);
  const data = pageRes?.data?.data as Data;

  if (pageRes.status !== 200 || !data) {
    return notFound();
  }

  const post = data?.content?.find(
    (item: ComponentData) => item.type === "Post"
  )?.props;
  const postDate = post?.date ? new Date(post.date).toISOString() : "";
  const postModifiedDate = post?.modifiedDate
    ? new Date(post.modifiedDate).toISOString()
    : "";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": post?.author ? "Person" : "Organization",
      name: post?.author || siteName,
      url: post?.authorUrl || siteUrl,
    },
    dateModified: postModifiedDate || postDate,
    datePublished: postDate,
    headline: post?.title || "",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: `${JSON.stringify(schema)}` }}
        type="application/ld+json"
      />
      <Render config={config} data={data} />
    </>
  );
}
