import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webloft.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2024-01-01",
    },
    {
      url: `${baseUrl}/ai-tools`,
      lastModified: "2024-01-01",
    },
    {
      url: `${baseUrl}/ai-tools/writing-tools`,
      lastModified: "2024-01-01",
    },
    {
      url: `${baseUrl}/ai-tools/writing-tools/chatgpt`,
      lastModified: "2024-01-01",
    },
  ];
}
