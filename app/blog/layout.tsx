import { Metadata } from "next";
import { ReactNode } from "react";

import content from "../../content.json";

const { siteName } = content;

export const metadata: Metadata = {
  title: {
    default: `Blog | ${siteName}`,
    template: `%s | Blog | ${siteName}`,
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
