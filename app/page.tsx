import { Hero } from "@/sections/Hero";
import { WorldIntro } from "@/sections/WorldIntro";
import { ClassesSection } from "@/sections/ClassesSection";
import { NewsSection } from "@/sections/NewsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Genesis | Home",
  description: "O seu futuro escrito por você."
}


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