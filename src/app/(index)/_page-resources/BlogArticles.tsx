import { articlesData } from "@/app/blog/_path-resources/articles-data";
import ArticleGroup from "@/shared/components/ArticleGroup/ArticleGroup";
import CustomLink from "@/shared/components/Clickables/Link";
import ContentWrapper from "@/shared/components/ContentWrapper";

import Title from "./Title";

export default function BlogArticles() {
  return (
    <ContentWrapper id="blog" element="section" className="mt-32 flex flex-col">
      <Title>Artigos do Blog</Title>
      <ArticleGroup classNames={{ container: "mt-6" }} articles={articlesData.slice(0, 3)} />
      <CustomLink href="/blog" className="mx-auto mt-14 w-full max-w-[385px]" stylization={{ variant: "secondary" }}>
        Ver todos os artigos
      </CustomLink>
    </ContentWrapper>
  );
}
