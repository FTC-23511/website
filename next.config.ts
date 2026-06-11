import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into `out/`.
  output: "export",

  // GitHub Pages has no image optimization server, so serve images as-is.
  images: { unoptimized: true },

  // TODO: If this site deploys to GitHub Pages at a sub-path (a project page,
  // e.g. https://<org>.github.io/<repo>/), set BOTH basePath and assetPrefix
  // to "/<repo-name>" (e.g. "/website") or all links and assets will 404.
  // Leave empty for a custom domain or a user/org root site.
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
