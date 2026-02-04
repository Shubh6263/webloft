import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webloft.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ai-tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ai-tools/writing-tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ai-tools/writing-tools/chatgpt`,
      lastModified: new Date(),
    },
  ];
}
