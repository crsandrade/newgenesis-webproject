import { Hero } from "@/sections/Hero";
import { WorldIntro } from "@/sections/WorldIntro";
import { ClassesSection } from "@/sections/ClassesSection";
import { NewsSection } from "@/sections/NewsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorldIntro />
      <ClassesSection />
      <NewsSection />
    </main>
  );
}