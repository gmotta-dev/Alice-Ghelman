import { TNextPageProps } from "@/shared/types/tnext-page-props";
import { aliceMetadata } from "@/shared/utils/alice-metadata";

import { articlesData } from "../../_path-resources/articles-data";
import Article from "./_page-resources/Article/Article";
import ArticleFooter from "./_page-resources/ArticleFooter";
import ArticleIntroduction from "./_page-resources/ArticleIntroduction";

export const generateMetadata = async (props: TNextPageProps) => {
  const params = await props.params;

  const artigo = articlesData.find((artigo) => artigo.slug === params.slug);

  return aliceMetadata({ title: `Alice Ghelman | Blog | ${artigo?.title}`, description: artigo?.description || "" });
};

export default function Artigo(props: TNextPageProps) {
  return (
    <main>
      <ArticleIntroduction params={props.params} searchParams={props.searchParams} />

      <Article params={props.params} searchParams={props.searchParams} />

      <ArticleFooter params={props.params} searchParams={props.searchParams} />
    </main>
  );
}
