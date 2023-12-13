import "@measured/puck/puck.css";
import { Metadata } from "next";
import { ReactNode } from "react";

import content from "../content.json";

const { title } = content;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-gb" style={{ scrollBehavior: "smooth" }}>
      <head>
        <meta
          httpEquiv="delegate-ch"
          content="sec-ch-width https://res.cloudinary.com; sec-ch-dpr https://res.cloudinary.com; sec-ch-viewport-width https://res.cloudinary.com;"
        />
        {/* Next.js auto-magic /app folder techniques do not render the markup
            we require for alternate feed links or icons. So keep these
            hard-coded here, with the assets in /public. */}
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/feed.atom"
          title="Measured - Atom Feed"
        ></link>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/feed.xml"
          title="Measured - RSS Feed"
        ></link>
        <link
          rel="alternate"
          type="application/json"
          href="/feed.json"
          title="Measured - JSON Feed"
        ></link>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          defer
          data-domain="measured.co"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </head>
      <body style={{ margin: "0" }}>{children}</body>
    </html>
  );
}
