import Title from "@/app/(index)/_page-resources/Title";
import ContentWrapper from "@/shared/components/ContentWrapper";
import CaretDown from "@/shared/components/Icons/Carbon/CaretDown";
import Tag from "@/shared/components/Tag";
import Image from "next/image";
import Link from "next/link";

import { articlesData, TArticle } from "../../_path-resources/articles-data";
import SectionDescription from "./SectionDescription";

export default function Introduction() {
  const mainArticle = articlesData[0];

  return (
    <ContentWrapper element="section" className="mt-32">
      <Title className="mb-8 font-light italic lg:text-8xl">Blog</Title>
      <SectionDescription title="ARTIGO EM DESTAQUE" />
      <Link href={"/blog/artigos/" + mainArticle.slug} className="group relative mt-3  flex w-full flex-col gap-5 rounded-lg md:flex-row">
        <Image
          src={mainArticle.image}
          width={704}
          height={392}
          alt="Artigo 1"
          className="max-h-[220px] rounded-2xl object-cover transition-all duration-300 hover:scale-[1.008] md:max-h-[392px]"
        />
        <ArticleCard {...mainArticle} />
      </Link>
    </ContentWrapper>
  );
}

const ArticleCard = (props: TArticle) => (
  <div className="flex  w-full flex-col items-start rounded-2xl bg-loafer-300 p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-loafer-400  md:max-w-[496px]">
    <Tag tag={props.tag} />
    <h5 className="mt-8 text-3xl font-medium text-loafer-900 md:text-5xl">{props.title}</h5>
    <p className="mt-4 font-medium text-loafer-800">{props.description}</p>
    <div className="mt-auto flex w-full flex-wrap items-center gap-4 font-medium text-nandor-900">
      <Image src="/images/alice-sm.webp" width={46} height={44} alt="Alice" />
      <span className="">Alice Ghelman</span>
      <span className="h-2 w-2 rounded-full bg-nandor-900" />
      <span className="text-sm text-nandor-900">{props.created_at}</span>
    </div>
  </div>
);
