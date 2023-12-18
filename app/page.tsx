import { Data } from "@measured/puck";
import { Render } from "@measured/puck/rsc";
import { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import content from "../content.json";
import { supabase } from "../lib/supabase";
import config from "../puck.config";

const { description, openGraphLocale, siteUrl, themeColor, title } = content;

const getPageRes = (path: string) =>
  supabase.from("puck").select("*").eq("path", path).maybeSingle();

export const viewport: Viewport = {
  initialScale: 1,
  themeColor,
  viewportFit: "cover",
  width: "device-width",
};

export async function generateMetadata(): Promise<Metadata> {
  const pageRes = await getPageRes("/");
  const data = pageRes?.data?.data as Data;
  const root = data.root;
  const pageDescription = root?.description || description;
  const pageTitle = root?.title || title;

  return {
    alternates: { canonical: siteUrl },
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
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
      siteName: title,
      title: pageTitle,
      type: "website",
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      site: "@hellomeasuredco",
    },
    title: pageTitle,
  };
}

export default async function Page() {
  const pageRes = await getPageRes("/");
  const data = pageRes.data?.data as Data;

  if (pageRes.status !== 200 || !data) {
    return notFound();
  }

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      logo: `${siteUrl}/logo-schema-organization.svg`,
      name: `${title}`,
      sameAs: [
        "https://github.com/measuredco",
        "https://twitter.com/hellomeasuredco",
        "https://www.linkedin.com/company/measuredco/",
      ],
      url: `${siteUrl}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${title}`,
      url: `${siteUrl}`,
    },
  ];

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
