import Contact from "@/components/home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start a Project",
    description: "Get in touch with Amaan Ansari for high-performance web systems, AI automation, or Full Stack architecture.",
    keywords: ["Hire Full Stack Developer", "React Consultant India", "Contact Amaan Ansari", "System Architecture Specialist"],
    alternates: {
        canonical: "https://amaanansari.in/contact",
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
            "name": "Contact",
            "item": "https://amaanansari.in/contact"
        }
    ]
};

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Contact mode="full" />
        </div>
    );
}
