import Contact from "@/components/home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start a Project",
    description: "Get in touch with Mo Aarif for high-performance web systems, Python automation, or IoT architecture.",
    keywords: ["Hire Python Developer", "Django Consultant India", "Contact Mo Aarif", "System Architecture Freelancer"],
};

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <Contact mode="full" />
        </div>
    );
}
