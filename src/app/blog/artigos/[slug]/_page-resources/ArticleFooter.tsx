import { Suspense } from "react";

import { articlesData } from "@/app/blog/_path-resources/articles-data";
import CustomLink from "@/shared/components/Clickables/Link";
import ContentWrapper from "@/shared/components/ContentWrapper";
import { TNextPageProps } from "@/shared/types/tnext-page-props";

export default function ArticleFooter(props: TNextPageProps) {
  return (
    <ContentWrapper element="section" className="mb-32 flex flex-col border-t border-neutral-300 pt-12">
      <PreviousAndNextArticles params={props.params} />
    </ContentWrapper>
  );
}

const PreviousAndNextArticles = (props: Pick<TNextPageProps, "params">) => {
  const SuspensedEl = async () => {
    const params = await props.params;
    const slug = params.slug;

    const currArticleIndex = articlesData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).findIndex((article) => article.slug === slug);

    const previousArticle = articlesData[currArticleIndex - 1];
    const nextArticle = articlesData[currArticleIndex + 1];

    return (
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full max-w-[285px] flex-col gap-2">
          <CustomLink disabled={!previousArticle} href={"/blog/artigos/" + previousArticle?.slug} stylization={{ variant: "secondary" }} className="w-full">
            Anterior
          </CustomLink>
          <p className="line-clamp-1 text-sm text-neutral-500">{previousArticle?.title || "Nenhum artigo anterior"}</p>
        </div>
        <div className="flex w-full max-w-[285px] flex-col items-end justify-end gap-2">
          <CustomLink disabled={!nextArticle} href={"/blog/artigos/" + nextArticle?.slug} stylization={{ variant: "secondary" }} className="w-full">
            Próximo
          </CustomLink>
          <p className="line-clamp-1 text-sm text-neutral-500">{nextArticle?.title || "Nenhum artigo posterior"}</p>
        </div>
      </div>
    );
  };

  return (
    <Suspense fallback="">
      <SuspensedEl />
    </Suspense>
  );
};
