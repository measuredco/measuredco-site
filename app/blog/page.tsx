import { Data } from "@measured/puck";
import { Render } from "@measured/puck/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import content from "../../content.json";
import { getPosts } from "../../lib/get-posts";
import { getPageRes } from "../../lib/get-page-res";
import config from "../../puck/config";

const { blogDescription, openGraphLocale, siteName, siteUrl } = content;

export { viewport } from "../page";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/blog";
  const pageRes = await getPageRes(path);
  const data = pageRes?.data?.data;
  const rootProps = data?.root?.props;
  const pageDescription = rootProps?.description || blogDescription;
  const pageImage = rootProps?.ogImage;
  const pageTitle = rootProps?.title || "Blog";
  const pageUrl = `${siteUrl}${path}`;

  return {
    alternates: { canonical: pageUrl },
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
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
      siteName,
      title: `${pageTitle} | ${siteName}`,
      type: "website",
      url: pageUrl,
    },
    title: pageTitle,
  };
}

export default async function Page() {
  const pageRes = await getPageRes("/blog");
  const data = pageRes.data?.data as Data;

  if (pageRes.status !== 200 || !data) {
    return notFound();
  }

  const posts = await getPosts(siteUrl);
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts?.map((post, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        url: post.link,
      };
    }),
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
