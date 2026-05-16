// Static export for Cloudflare Pages. Redirects/rewrites are not supported
// under `output: 'export'` and are reimplemented as a Cloudflare _redirects
// file (see Phase 6 in MIGRATION.md); feeds become build-time static files
// (Phase 4).
module.exports = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudinary-loader.ts",
  },
  reactStrictMode: false,
  transpilePackages: [],
};
