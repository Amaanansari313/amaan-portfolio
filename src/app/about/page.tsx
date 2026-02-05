import Resume from "@/components/resume/Resume";

export const metadata = {
    title: "About & Engineering Resume",
    description: "Digital resume of Mo Aarif. Exploration of professional experience in Full Stack Architecture, Python Development, and System Design.",
    keywords: ["Mo Aarif Resume", "SGSN Associates Developer", "Python Engineer India", "Full Stack Architect CV"],
};

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <Resume />
        </div>
    );
}
