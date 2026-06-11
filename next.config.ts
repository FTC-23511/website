import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into `out/`.
  output: "export",

  // GitHub Pages has no image optimization server, so serve images as-is.
  images: { unoptimized: true },

  // Deployed to GitHub Pages at https://ftc-23511.github.io/website/ — both
  // values must match the repo name or all links and assets 404. If the site
  // ever moves to a custom domain (seattlesolvers.com), set both back to "".
  basePath: "/website",
  assetPrefix: "/website",
};

export default nextConfig;
