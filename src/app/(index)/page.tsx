import { aliceMetadata } from "@/shared/utils/alice-metadata";

import About from "./_page-resources/About";
import BlogArticles from "./_page-resources/BlogArticles";
import Contact from "./_page-resources/Contact/Contact";
import ExperienceWith from "./_page-resources/ExperienceWith";
import FAQ from "./_page-resources/FAQ/FAQ";
import Introduction from "./_page-resources/Introduction/Introduction";
import WorkWith from "./_page-resources/WorkWith/WorkWith";

export const metadata = aliceMetadata({ title: "Alice Ghelman", description: "Juntos podemos encontrar uma versão de si que faça mais sentido para você. Vamos?" });

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <WorkWith />
      <ExperienceWith />
      <BlogArticles />
      <Contact />
      <FAQ />
    </main>
  );
}
