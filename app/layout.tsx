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
        <script
          dangerouslySetInnerHTML={{
            __html: `
    var body = document.getElementsByTagName("body")[0];
    var menu = document.getElementById("msrd-menu");
    var menuButton = document.getElementById("msrd-menuButton");

    if (menu && menuButton) {

      function toggleMenu() {
        body.classList.toggle("msrd-u-overflowHidden");
        menu.classList.toggle("msrd-HeaderMenu--open");
        menuButton.classList.toggle("msrd-HeaderMenuButton--menuOpen");
      }

      menu.addEventListener("click", function (event) {
        if (window.matchMedia("(min-width: 48em)").matches) {
          return;
        }
        if (event.target.tagName === "A") {
          toggleMenu();
        }
      });

      menuButton.addEventListener("click", toggleMenu);

      window.addEventListener("resize", function () {
        if (window.matchMedia("(min-width: 48em)").matches) {
          body.classList.remove("msrd-u-overflowHidden");
          menu.classList.remove("msrd-HeaderMenu--open");
          menuButton.classList.remove("msrd-HeaderMenuButton--menuOpen");
        }
      });
    }`,
          }}
        />
      </body>
    </html>
  );
}
