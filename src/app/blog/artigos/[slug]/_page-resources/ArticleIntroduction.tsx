import { Suspense } from "react";

import ContentWrapper from "@/shared/components/ContentWrapper";
import Tag from "@/shared/components/Tag";
import { TNextPageProps } from "@/shared/types/tnext-page-props";
import Image from "next/image";
import { notFound } from "next/navigation";

import { articlesData } from "../../../_path-resources/articles-data";

export default function ArticleIntroduction(props: TNextPageProps) {
  const AsyncElement = async () => {
    const params = await props.params;

    const article = articlesData.find((article) => article.slug === params.slug);

    if (!article) notFound();

    return (
      <ContentWrapper element="section" className="mt-32 flex  max-w-[1064px] flex-col items-center gap-6 text-center">
        <Tag tag={article.tag} />
        <h1 className="max-w-[1016px] text-2xl font-medium text-neutral-900 md:text-5xl">{article.title}</h1>
        <p className="max-w-[1016px] text-neutral-700">{article.description}</p>
        <Image src={article.image} alt={article.title} width={1220} height={578} className="max-h-[528px] rounded-2xl object-cover object-center" />

        <div className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-b-neutral-300 pb-6 font-medium text-nandor-900">
          <span className="flex items-center gap-2">
            <Image src="/images/alice-sm.webp" width={46} height={44} alt="Alice" />
            <span className="text-left">
              Alice <br /> Ghelman
            </span>
          </span>
          <span className="text-sm text-nandor-900">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-nandor-900" />
            {new Date(article.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })}
          </span>
        </div>
      </ContentWrapper>
    );
  };

  return (
    <Suspense>
      <AsyncElement />
    </Suspense>
  );
}
