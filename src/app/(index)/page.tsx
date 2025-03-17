import About from "./_page-resources/About";
import BlogArticles from "./_page-resources/BlogArticles";
import Contact from "./_page-resources/Contact/Contact";
import ExperienceWith from "./_page-resources/ExperienceWith";
import FAQ from "./_page-resources/FAQ/FAQ";
import Introduction from "./_page-resources/Introduction/Introduction";
import WorkWith from "./_page-resources/WorkWith/WorkWith";

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
