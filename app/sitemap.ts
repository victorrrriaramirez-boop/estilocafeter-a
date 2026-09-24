import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/servicios`, lastModified: now, changeFrequency: "monthly", priority: .9 },
    { url: `${site.url}/contacto`, lastModified: now, changeFrequency: "monthly", priority: .6 },
    ...site.services.map((service) => ({
      url: `${site.url}/servicios/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: .8
    }))
  ];
}
