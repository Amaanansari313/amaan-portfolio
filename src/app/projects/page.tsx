import Projects from "@/components/home/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects Archive",
    description: "A comprehensive archive of engineering projects by Amaan Ansari, featuring AI/ML systems, cloud solutions, and full-stack web architectures.",
    keywords: ["AI Projects", "Full Stack Portfolio", "React Systems", "Next.js Apps", "Software Engineering Archive"],
    openGraph: {
        title: "Selected Engineering Works | Amaan Ansari",
        description: "Explore the technical archive of Amaan Ansari, featuring high-performance software solutions.",
    },
    alternates: {
        canonical: "https://amaanansari.in/projects",
    },
};

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://amaanansari.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "https://amaanansari.in/projects"
            }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Amaan Ansari's Engineering Projects",
        "description": "Portfolio of selected software and AI projects.",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "WaterAI",
                "description": "AI-driven CRM & Smart Operations Platform."
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Face Recognition",
                "description": "Automated attendance system using Computer Vision."
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Plant Disease AI",
                "description": "ML-based disease detection for agriculture."
            }
        ]
    }
];

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Projects mode="grid" />
        </div>
    );
}
