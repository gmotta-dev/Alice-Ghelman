import { TNextPageProps } from "@/shared/types/tnext-page-props";

import Article from "./_page-resources/Article/Article";
import ArticleFooter from "./_page-resources/ArticleFooter";
import ArticleIntroduction from "./_page-resources/ArticleIntroduction";

export default function Artigo(props: TNextPageProps) {
  return (
    <main>
      <ArticleIntroduction params={props.params} searchParams={props.searchParams} />

      <Article params={props.params} searchParams={props.searchParams} />

      <ArticleFooter params={props.params} searchParams={props.searchParams} />
    </main>
  );
}
