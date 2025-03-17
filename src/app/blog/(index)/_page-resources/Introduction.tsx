import Title from "@/app/(index)/_page-resources/Title";
import ContentWrapper from "@/shared/components/ContentWrapper";
import Image from "next/image";

import SectionDescription from "./SectionDescription";

type TProps = { img: string; title: string; tag: string; description: string; date: string };

export default function Introduction(props: TProps) {
  return (
    <ContentWrapper element="section" className="mt-32">
      <Title className="mb-8 font-light italic lg:text-8xl">Blog</Title>
      <SectionDescription title="ARTIGO EM DESTAQUE" />
      <div className="relative mt-3 flex w-full flex-col gap-5 overflow-hidden rounded-lg md:flex-row">
        <Image src="/images/artigo-1.png" width={704} height={392} alt="Artigo 1" className="max-h-[220px] rounded-2xl object-cover md:max-h-[392px]" />
        <ArticleCard {...props} />
      </div>
    </ContentWrapper>
  );
}

const ArticleCard = (props: TProps) => (
  <div className="w-full rounded-2xl bg-loafer-300 p-4 md:max-w-[496px]">
    <span className="inline-block rounded-[4px] bg-loafer-900 p-2 text-sm font-medium text-loafer-300">{props.tag}</span>
    <h5 className="mt-8 text-3xl font-medium text-loafer-900 md:text-5xl">{props.title}</h5>
    <p className="mt-4 font-medium text-loafer-800">{props.description}</p>
    <div className="mt-6 flex flex-wrap items-center gap-4 font-medium text-nandor-900">
      <Image src="/images/alice-sm.webp" width={46} height={44} alt="Alice" />
      <span className="">Alice Ghelman</span>
      <span className="h-2 w-2 rounded-full bg-nandor-900" />
      <span className="text-sm text-nandor-900">{props.date}</span>
    </div>
  </div>
);
