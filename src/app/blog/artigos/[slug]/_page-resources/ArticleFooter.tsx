import { Suspense } from "react";

import { articlesData } from "@/app/blog/_path-resources/articles-data";
import CustomLink from "@/shared/components/Clickables/Link";
import ContentWrapper from "@/shared/components/ContentWrapper";
import LogoWhatsapp from "@/shared/components/Icons/LogoWhatsapp";
import { TNextPageProps } from "@/shared/types/tnext-page-props";
import Image from "next/image";

export default function ArticleFooter(props: TNextPageProps) {
  return (
    <ContentWrapper element="section" className="mb-32 mt-12 flex flex-col">
      <AboutAlice />
      <PreviousAndNextArticles params={props.params} />
    </ContentWrapper>
  );
}

const AboutAlice = () => {
  return (
    <div className="w-full border-y border-y-neutral-300 py-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/images/alice-md.webp" alt="Alice" width={96} height={96} className="max-h-[96px] min-w-0 max-w-[96px] lg:max-w-none" />
          <span className="text-3xl font-medium text-nandor-900 md:text-4xl">
            Alice <br /> Ghelman
          </span>
        </div>
        <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer">
          <LogoWhatsapp className="min-h-6 min-w-6" />
        </a>
      </div>

      <p className="mt-4 font-heebo font-light text-neutral-500">
        Psicóloga formada pela PUC-Rio (CRP 05/73768) na metade de 2023. Atuante na área desde 2020. Nessa época tive minha primeira experiência em um Hospital-Dia que por dois
        anos me proporcionou trabalhar acompanhando, acolhendo e proporcionando assistência para pacientes psiquiátricos e seus familiares. A partir daí, trabalhei outros dois anos
        como psicóloga clínica, supervisionada, atendendo crianças e adultos. Simultaneamente, atuava como acompanhante terapêutica de uma criança com diagnóstico de autismo na sua
        primeiríssima infância.
      </p>
    </div>
  );
};

const PreviousAndNextArticles = (props: Pick<TNextPageProps, "params">) => {
  const SuspensedEl = async () => {
    const params = await props.params;
    const slug = params.slug;

    const currArticleIndex = articlesData.findIndex((article) => article.slug === slug);

    const previousArticle = articlesData[currArticleIndex - 1];
    const nextArticle = articlesData[currArticleIndex + 1];

    return (
      <div className="mt-8 flex w-full items-center justify-between">
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
