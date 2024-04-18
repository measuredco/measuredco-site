import { Data } from "@measured/puck";
import { Render } from "@measured/puck/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import content from "../../content.json";
import { getPosts } from "../../lib/get-posts";
import { supabase } from "../../lib/supabase";
import config from "../../puck.config";

const { blogDescription, openGraphLocale, siteName, siteUrl, title } = content;

const getPageRes = (path: string) =>
  supabase.from("puck").select("*").eq("path", path).maybeSingle();

export { viewport } from "../page";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/blog";
  const pageRes = await getPageRes(path);
  const data = pageRes?.data?.data as Data;
  const root = data?.root;
  const pageDescription = root?.description || blogDescription;
  const pageTitle = root?.title || "Blog";
  const pageUrl = `${siteUrl}${path}`;

  return {
    alternates: { canonical: pageUrl },
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      description: pageDescription,
      images: [
        {
          alt: siteName,
          height: 630,
          url: "/social.png",
          type: "image/png",
          width: 1200,
        },
      ],
      locale: openGraphLocale,
      siteName,
      title: `${pageTitle} | ${title}`,
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
