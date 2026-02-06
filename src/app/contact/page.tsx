import Contact from "@/components/home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start a Project",
    description: "Get in touch with Mo Aarif for high-performance web systems, Python automation, or IoT architecture.",
    keywords: ["Hire Python Developer", "Django Consultant India", "Contact Mo Aarif", "System Architecture Freelancer"],
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
            "name": "Contact",
            "item": "https://moaarif.in/contact"
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
