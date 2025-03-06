import About from "./_pageResources/About";
import BlogArticles from "./_pageResources/BlogArticles";
import ExperienceWith from "./_pageResources/ExperienceWith/ExperienceWith";
import FAQ from "./_pageResources/FAQ/FAQ";
import Introduction from "./_pageResources/Introduction/Introduction";
import WorkWith from "./_pageResources/WorkWith/WorkWith";

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <WorkWith />
      <ExperienceWith />
      <BlogArticles />
      <FAQ />
    </main>
  );
}
