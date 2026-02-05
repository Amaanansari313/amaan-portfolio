import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mo Aarif | Full Stack Architect & Python Expert",
  description: "Senior Full Stack Architect specializing in Python, Django, Next.js, and IoT solutions. Explore the digital portfolio of Mo Aarif.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects mode="grid" limit={3} />
      <Contact mode="simple" />
    </>
  );
}
