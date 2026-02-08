import Resume from "@/components/resume/Resume";

export const metadata = {
    title: "About & Engineering Resume",
    description: "Digital resume of Amaan Ansari. Exploration of professional experience in Full Stack Development, AI/ML integration, and System Design.",
    keywords: ["Amaan Ansari Resume", "SGSN Associate Developer", "Full Stack Engineer India", "AI Specialist CV"],
    alternates: {
        canonical: "https://amaanansari.in/about",
    },
};

const jsonLd = {
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
            "name": "About",
            "item": "https://amaanansari.in/about"
        }
    ]
};

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Resume />
        </div>
    );
}
