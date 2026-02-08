import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Amaan Ansari | Full Stack Developer",
        short_name: "Amaan Ansari",
        description: "Professional portfolio of Amaan Ansari, Full Stack Developer & AI Specialist.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#3B82F6",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
