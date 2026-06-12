import type { MetadataRoute } from "next";
import { navLinks, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    ...navLinks.map((link) => ({
      url: `${site.url}${link.href}`,
      priority: link.href === "/classes" ? 0.9 : 0.8,
    })),
  ];
}
