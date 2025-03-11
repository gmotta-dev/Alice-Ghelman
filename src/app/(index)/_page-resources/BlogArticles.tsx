import ArticleGroup from "@/shared/components/ArticleGroup/ArticleGroup";
import CustomLink from "@/shared/components/Clickables/Link";
import ContentWrapper from "@/shared/components/ContentWrapper";

import Title from "./Title";

export default function BlogArticles() {
  return (
    <ContentWrapper element="section" className="mt-32 flex flex-col">
      <Title>Artigos do Blog</Title>
      <p className="mt-4 text-nandor-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <ArticleGroup classNames={{ container: "mt-6" }} />
      <CustomLink href="/blog" className="mx-auto mt-14 w-full max-w-[385px]" stylization={{ variant: "secondary" }}>
        Ver todos os artigos
      </CustomLink>
    </ContentWrapper>
  );
}
