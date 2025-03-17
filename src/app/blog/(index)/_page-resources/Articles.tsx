import ArticleGroup from "@/shared/components/ArticleGroup/ArticleGroup";
import ContentWrapper from "@/shared/components/ContentWrapper";

import SectionDescription from "./SectionDescription";

export default function Articles() {
  return (
    <ContentWrapper element="section" className="my-32">
      <SectionDescription title="TODOS ARTIGOS" />
      <ArticleGroup classNames={{ container: "mt-4" }} />
      <ArticleGroup classNames={{ container: "mt-16" }} />
    </ContentWrapper>
  );
}
