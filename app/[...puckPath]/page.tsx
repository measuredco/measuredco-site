import { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import content from "../../content.json";
import resolvePuckPath from "../../lib/resolve-puck-path";
import { getPageRes } from "../../lib/get-page-res";
import config from "../../puck/config";

const { description, openGraphLocale, siteName, siteUrl, title } = content;

export { viewport } from "../page";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const { path } = resolvePuckPath(params.puckPath);
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
  params: { puckPath: string[] };
}) {
  const { path } = resolvePuckPath(params.puckPath);
  const pageRes = await getPageRes(path);
  const data = pageRes?.data?.data as Data;

  if (pageRes.status !== 200 || !data) {
    return notFound();
  }

  return <Render config={config} data={data || {}} />;
}
