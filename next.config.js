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
