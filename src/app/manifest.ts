import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Mo Aarif | Full Stack Architect",
        short_name: "Mo Aarif",
        description: "Professional portfolio of Mo Aarif, Full Stack Architect & Python Specialist.",
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
