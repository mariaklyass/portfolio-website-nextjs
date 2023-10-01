import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      {/* <SectionDivider /> */}
      <Projects />
      <Skills />
      <About />

      <Contact />
    </main>
  );
}
