import Resume from "@/components/resume/Resume";

export const metadata = {
    title: "About & Engineering Resume",
    description: "Digital resume of Mo Aarif. Exploration of professional experience in Full Stack Architecture, Python Development, and System Design.",
    keywords: ["Mo Aarif Resume", "SGSN Associates Developer", "Python Engineer India", "Full Stack Architect CV"],
    alternates: {
        canonical: "https://moaarif.in/about",
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
            "item": "https://moaarif.in"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://moaarif.in/about"
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
