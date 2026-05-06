import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { WorldIntro } from "@/sections/WorldIntro";
import { ClassesSection } from "@/sections/ClassesSection";
import { NewsSection } from "@/sections/NewsSection";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorldIntro />
      <ClassesSection />
      <NewsSection />
      <Footer />
    </main>
  );
}