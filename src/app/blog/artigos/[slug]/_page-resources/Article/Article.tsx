import { Suspense } from "react";

import ContentWrapper from "@/shared/components/ContentWrapper";
import { TNextPageProps } from "@/shared/types/tnext-page-props";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { articlesData } from "../../../../_path-resources/articles-data";
import styles from "./article.module.css";

export default function Article(props: TNextPageProps) {
  const AsyncElement = async () => {
    const params = await props.params;
    const article = articlesData.find((article) => article.slug === params.slug);

    if (!article) notFound();

    return <MDXRemote source={article.mdx} />;
  };

  return (
    <Suspense fallback="">
      <ContentWrapper element="article" className={twMerge("my-6 flex max-w-[1064px] flex-col gap-6 text-justify font-inter", styles.article)}>
        <AsyncElement />
      </ContentWrapper>
    </Suspense>
  );
}
