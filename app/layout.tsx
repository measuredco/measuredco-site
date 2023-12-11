import "@measured/puck/puck.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-gb" style={{ scrollBehavior: "smooth" }}>
      <head>
        <meta
          httpEquiv="delegate-ch"
          content="sec-ch-width https://res.cloudinary.com; sec-ch-dpr https://res.cloudinary.com; sec-ch-viewport-width https://res.cloudinary.com;"
        />
        <meta itemProp="image" content="https://measured.co/social.png" />
        <meta name="image" content="https://measured.co/social.png" />
        <meta name="theme-color" content="#a81a66" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://measured.co/social.png" />
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, width=device-width"
        />
        <meta property="og:image" content="https://measured.co/social.png" />
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
        <link rel="canonical" href="https://measured.co" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          defer
          data-domain="measured.co"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </head>
      <body style={{ margin: "0" }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Measured",
  "url": "https://measured.co",
  "logo": "https://measured.co/logo-schema-organization.svg",
  "sameAs": [
    "https://twitter.com/hellomeasuredco",
    "https://www.linkedin.com/company/measuredco/",
    "https://github.com/measuredco"
  ]
}`,
          }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
