import { Render } from "@measured/puck/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import content from "../../../content.json";
import resolvePuckPath from "../../../lib/resolve-puck-path";
import { getPageRes } from "../../../lib/get-page-res";
import config, { Props } from "../../../puck.config";

const { blogPostDescription, openGraphLocale, siteName, siteUrl, title } =
  content;

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
  const data = pageRes?.data?.data;
  const rootProps = data?.root?.props;
  const pageDescription = rootProps?.description || blogPostDescription;
  const pageImage = rootProps?.ogImage;
  const pageTitle = rootProps?.title || "Post";
  const pageUrl = `${siteUrl}${blogPath}${path}`;
  const post = data?.content?.find((item) => item.type === "Post")
    ?.props as Props["Post"];
  const postDate = post?.date ? new Date(post.date).toISOString() : "";
  const postModifiedDate = post?.modifiedDate
    ? new Date(post.modifiedDate).toISOString()
    : "";
  const postTitle = post?.title;

  return {
    alternates: { canonical: pageUrl },
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      authors: [post?.author],
      description: pageDescription,
      images: [
        {
          alt: pageImage?.alt || siteName,
          height: 630,
          url: pageImage?.url || "/social.png",
          type: pageImage?.type || "image/png",
          width: 1200,
        },
      ],
      locale: openGraphLocale,
      modifiedTime: postModifiedDate || postDate,
      publishedTime: postDate,
      siteName,
      title: postTitle || pageTitle,
      type: "article",
      url: pageUrl,
    },
    title: postTitle || pageTitle,
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
  const data = pageRes?.data?.data;

  if (pageRes.status !== 200 || !data) {
    return notFound();
  }

  const pageTitle = data.root?.title || data.root?.props?.title || "Post";
  const post = data?.content?.find((item) => item.type === "Post")
    ?.props as Props["Post"];
  const postAuthor = post?.author;
  const postDate = post?.date ? new Date(post.date).toISOString() : "";
  const postModifiedDate = post?.modifiedDate
    ? new Date(post.modifiedDate).toISOString()
    : "";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": postAuthor ? "Person" : "Organization",
      name: postAuthor || siteName,
      url: post?.authorUrl || siteUrl,
    },
    dateModified: postModifiedDate || postDate,
    datePublished: postDate,
    headline: post?.title || pageTitle,
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
