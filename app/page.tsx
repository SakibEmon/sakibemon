import { SiteHeader } from "@/components/portfolio/site-header";
import { Hero } from "@/components/portfolio/hero";
import {
  About,
  Skills,
  Experience,
} from "@/components/portfolio/profile-sections";
import { Research, Writing } from "@/components/portfolio/selected-work";
import { Journal } from "@/components/portfolio/journal";
import { Contact } from "@/components/portfolio/contact";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="site-container">
        <Hero />
        <About />
        <Research />
        <Writing />
        <Skills />
        <Experience />
        <Journal />
        <Contact />
      </main>
    </>
  );
}
