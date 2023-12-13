import { Metadata } from "next";
import { ReactNode } from "react";

import content from "../../content.json";

const { title } = content;

export const metadata: Metadata = {
  title: {
    default: `Blog | ${title}`,
    template: `%s | Blog | ${title}`,
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
