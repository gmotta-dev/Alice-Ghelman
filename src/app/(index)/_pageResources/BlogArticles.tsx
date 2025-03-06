import ArticleGroup from "@/shared/components/ArticleGroup/ArticleGroup";
import CustomLink from "@/shared/components/Clickables/Link";
import ContentWrapper from "@/shared/components/ContentWrapper";

export default function BlogArticles() {
  return (
    <ContentWrapper element="section" className="mt-32 flex flex-col">
      <h2 className="text-5xl font-bold text-nandor-900 md:text-6xl">Artigos do Blog</h2>
      <p className="mt-4 text-nandor-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <ArticleGroup classNames={{ container: "mt-6" }} />
      <CustomLink href="/blog" className="mx-auto mt-14 w-full max-w-[385px]" stylization={{ variant: "secondary" }}>
        Ver todos os artigos
      </CustomLink>
    </ContentWrapper>
  );
}
