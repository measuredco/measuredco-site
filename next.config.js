module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  reactStrictMode: false,
  transpilePackages: [],
  async redirects() {
    return [
      {
        destination: "/blog/font-distribution-problems",
        permanent: true,
        source: "/blog/inter-problems",
      },
      {
        source:
          "/blog/puck-open-source-visual-react-editor-modern-content-workflows",
        destination: "https://puckeditor.com/blog/introducing-puck",
        permanent: true,
      },
      {
        source: "/blog/building-a-react-page-builder-an-introduction-to-puck",
        destination:
          "https://puckeditor.com/blog/building-a-react-page-builder-an-introduction-to-puck",
        permanent: true,
      },
      {
        source: "/blog/puck-013",
        destination: "https://puckeditor.com/blog/puck-013",
        permanent: true,
      },
      {
        source: "/blog/puck-v014",
        destination: "https://puckeditor.com/blog/puck-014",
        permanent: true,
      },
      {
        source: "/blog/puck-v015",
        destination: "https://puckeditor.com/blog/puck-015",
        permanent: true,
      },
      {
        source: "/blog/puck-v016",
        destination: "https://puckeditor.com/blog/puck-016",
        permanent: true,
      },
      {
        source: "/blog/puck-v017",
        destination: "https://puckeditor.com/blog/puck-017",
        permanent: true,
      },
      {
        source: "/blog/using-css-variables-to-create-dynamic-themes-in-puck",
        destination:
          "https://puckeditor.com/blog/using-css-variables-to-create-dynamic-themes-in-puck",
        permanent: true,
      },
      {
        source: "/blog/managing-application-state-in-puck",
        destination:
          "https://puckeditor.com/blog/managing-application-state-in-puck",
        permanent: true,
      },
      {
        source: "/blog/puck-v018",
        destination: "https://puckeditor.com/blog/puck-018",
        permanent: true,
      },
      {
        source:
          "/blog/revolutionizing-drag-and-drop-in-react-introducing-puck-018",
        destination:
          "https://puckeditor.com/blog/revolutionizing-drag-and-drop-in-react-introducing-puck-018",
        permanent: true,
      },
      {
        source:
          "/blog/advanced-layouts-with-puck-harnessing-grid-and-flex-containers",
        destination:
          "https://puckeditor.com/blog/advanced-layouts-with-puck-harnessing-grid-and-flex-containers",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        destination: "/api/feed/atom",
        source: "/feed.atom",
      },
      {
        destination: "/api/feed/json",
        source: "/feed.json",
      },
      {
        destination: "/api/feed/rss",
        source: "/feed.xml",
      },
    ];
  },
};
