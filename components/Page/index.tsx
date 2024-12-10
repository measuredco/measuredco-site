import { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "..";

import "./Page.css";

export type PageProps = {
  centered?: boolean;
  children: ReactNode;
  headerLinks: { current: boolean; href: string; label: string }[];
};

const Page = ({ centered, children, headerLinks }: PageProps) => (
  <div className={`msrd-Page${centered ? " msrd-Page--centered" : ""}`}>
    <SiteHeader links={headerLinks} />
    <main className="msrd-Page-main">{children}</main>
    <SiteFooter />
  </div>
);

export default Page;
