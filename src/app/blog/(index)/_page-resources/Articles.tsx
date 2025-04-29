import ArticleGroup from "@/shared/components/ArticleGroup/ArticleGroup";
import ContentWrapper from "@/shared/components/ContentWrapper";

import { articlesData } from "../../_path-resources/articles-data";
import SectionDescription from "./SectionDescription";

export default function Articles() {
  const articles = articlesData;
  return (
    <ContentWrapper element="section" className="my-32">
      <SectionDescription title="TODOS ARTIGOS" />
      <ArticleGroup classNames={{ container: "mt-4" }} articles={articles.slice(0, 3)} />
    </ContentWrapper>
  );
}
