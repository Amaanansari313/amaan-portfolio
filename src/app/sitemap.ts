import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://moaarif.in";
    const lastModified = new Date().toISOString().split('T')[0];

    return [
        {
            url: `${baseUrl}/`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastModified,
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
