import "@measured/puck/dist/index.css";

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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://measured.co/social.png" />
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, width=device-width"
        />
        <meta property="og:image" content="https://measured.co/social.png" />
        <link rel="canonical" href="https://measured.co" />
        <link rel="icon" href="favicon.png" type="image/png" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        {/* {
          <link
            rel="preload"
            href="./Inter.var.woff2?v=3.19"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        } */}
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
