import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/sections/Hero";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Skip to main content — keyboard & screen reader navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-bold focus:text-sm focus:uppercase focus:tracking-widest"
      >
        Skip to Content
      </a>
      <FloatingNav />
      <main id="main-content" className="flex-1 w-full flex flex-col">
        <Hero />
        <ProjectsGallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
