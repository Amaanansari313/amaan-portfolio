import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amaan Ansari | Full Stack Developer & AI/ML Specialist",
  description: "Senior Full Stack Developer specializing in React, Node.js, AI/ML, and Cloud solutions. Explore the digital portfolio of Amaan Ansari.",
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
