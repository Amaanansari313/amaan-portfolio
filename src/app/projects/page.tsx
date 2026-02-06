import Projects from "@/components/home/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects Archive",
    description: "A comprehensive archive of engineering projects by Mo Aarif, featuring Python bots, IoT systems, and full-stack web architectures.",
    keywords: ["Python Projects", "IoT Portfolio", "Django Systems", "Next.js Apps", "Software Engineering Archive"],
    openGraph: {
        title: "Selected Engineering Works | Mo Aarif",
        description: "Explore the technical archive of Mo Aarif, featuring high-performance software solutions.",
    },
    alternates: {
        canonical: "https://moaarif.in/projects",
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
                "item": "https://moaarif.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "https://moaarif.in/projects"
            }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Mo Aarif's Engineering Projects",
        "description": "Portfolio of selected software and IoT projects.",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "ICE Button SOS",
                "description": "IoT-based emergency alert system."
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Sniper Bot",
                "description": "Automated arbitrage trading bot."
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Safety System",
                "description": "Real-time driver drowsiness detection."
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
