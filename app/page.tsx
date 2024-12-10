import { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { Surface } from "../components";
import content from "../content.json";
import { getPageRes } from "../lib/get-page-res";
import config from "../puck/config";

const { description, openGraphLocale, siteName, siteUrl, themeColor, title } =
  content;

export const viewport: Viewport = {
  initialScale: 1,
  themeColor,
  viewportFit: "cover",
  width: "device-width",
};

export async function generateMetadata(): Promise<Metadata> {
  const pageRes = await getPageRes("/");
  const data = pageRes?.data?.data;
  const rootProps = data?.root?.props;
  const pageDescription = rootProps?.description || description;
  const pageImage = rootProps?.ogImage;
  const pageTitle = rootProps?.title || title;

  return {
    alternates: { canonical: siteUrl },
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

  const pageTitle = data.root?.title || title;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${pageTitle}`,
    url: `${siteUrl}`,
    publisher: {
      "@type": "Organization",
      logo: `${siteUrl}/logo-schema-organization.svg`,
      name: `${siteName}`,
      sameAs: [
        "https://bsky.app/profile/measured.co",
        "https://dev.to/measuredco",
        "https://github.com/measuredco",
        "https://www.linkedin.com/company/measuredco/",
      ],
      url: `${siteUrl}`,
    },
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: `${JSON.stringify(schema)}` }}
        type="application/ld+json"
      />
      <Surface background="graphicDark">
        <Render config={config} data={data} />
      </Surface>
    </>
  );
}
