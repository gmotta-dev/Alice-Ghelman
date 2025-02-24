import About from "./_pageResources/About";
import ExperienceWith from "./_pageResources/ExperienceWith/ExperienceWith";
import Introduction from "./_pageResources/Introduction/Introduction";
import WorkWith from "./_pageResources/WorkWith/WorkWith";

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <WorkWith />
      <ExperienceWith />
    </main>
  );
}
