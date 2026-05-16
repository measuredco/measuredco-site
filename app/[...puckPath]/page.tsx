import { Data, Render } from "@measured/puck";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import content from "../../content.json";
import { getContentSlugs } from "../../lib/content-paths";
import { getPageRes } from "../../lib/get-page-res";
import { resolvePuckPath } from "../../lib/resolve-puck-path";
import config from "../../puck/config";

const { description, openGraphLocale, siteName, siteUrl } = content;

export { viewport } from "../page";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getContentSlugs();

  // "/" is served by app/page.tsx; "/blog" and "/blog/*" by the blog routes.
  return slugs
    .filter((puckPath) => puckPath.length > 0 && puckPath[0] !== "blog")
    .map((puckPath) => ({ puckPath }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}): Promise<Metadata> {
  const { puckPath } = await params;
  const { path } = resolvePuckPath(puckPath);
  const pageRes = await getPageRes(path);
  const data = pageRes?.data?.data;
  const rootProps = data?.root.props || data?.root;
  const pageDescription = rootProps?.description || description;
  const pageImage = rootProps?.ogImage;
  const pageTitle = rootProps?.title || siteName;
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
      title: pageTitle,
      type: "website",
      url: pageUrl,
    },
    title: pageTitle,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  const { puckPath } = await params;
  const { path } = resolvePuckPath(puckPath);
  const pageRes = await getPageRes(path);
  const data = pageRes?.data?.data as Data;

  if (pageRes.status !== 200 || !data) {
    return notFound();
  }

  return <Render config={config} data={data || {}} />;
}
