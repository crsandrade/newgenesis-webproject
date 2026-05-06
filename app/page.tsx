import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { WorldIntro } from "@/sections/WorldIntro";
import { ClassesSection } from "@/sections/ClassesSection";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorldIntro />
      <ClassesSection />
    </main>
  );
}