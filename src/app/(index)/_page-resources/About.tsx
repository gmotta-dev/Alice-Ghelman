import ContentWrapper from "@/shared/components/ContentWrapper";
import Image from "next/image";

export default function About() {
  return (
    <ContentWrapper id="sobre-mim" element="section" className="mt-32 flex flex-wrap items-center justify-center gap-16 lg:justify-between">
      <Image src="/images/alice-xl.webp" alt="Alice" width={410} height={606} className="max-h-[606px] min-w-0 max-w-[360px] lg:max-w-none" />
      <Text />
    </ContentWrapper>
  );
}

const Text = () => {
  return (
    <div className="flex w-full max-w-[704px] flex-col gap-4 rounded-2xl bg-loafer-100 p-8 font-inter text-sm text-loafer-900 md:text-base">
      <h6 className="font-poppins text-3xl font-bold text-loafer-950 md:text-5xl">Prazer,</h6>
      <p>Sou Alice, psicóloga formada pela PUC-Rio (CRP 05/73768) na metade de 2023, mas atuo na área desde 2020.</p>

      <p>
        Nessa época tive minha primeira experiência em um Hospital-Dia que por dois anos me proporcionou trabalhar acompanhando, acolhendo e proporcionando assistência para
        pacientes psiquiátricos e seus familiares. A partir daí, trabalhei outros dois anos como psicóloga clínica, supervisionada, atendendo crianças e adultos. Simultaneamente,
        atuava como acompanhante terapêutica de uma criança com diagnóstico de autismo na sua primeiríssima infância.{" "}
      </p>

      <p>
        Desde então, percebi que <b>meu desejo apontava em direção ao trabalho com pessoas típicas e atípicas em todas suas idades</b>. É o que eu faço desde formada, com convicção
        e prazer, de maneira presencial e online.
      </p>

      <p>
        Em 2023 fiz a primeira Formação em Clínica Racializada e Saúde Mental da População Negra. Atualmente faço especialização em Ciência, Arte e Cultura na Saúde pela Fiocruz e
        estudo para que no futuro eu seja uma profissional que atende em Libras. <b>Tudo para exercer uma clínica racializada, inclusiva e ética.</b>
      </p>

      <p>
        Sou uma mulher-cis, branca e carioca. Amo a cor verde, os livros, a vida e tudo que ela inclui. No final, sou uma artista, psicóloga, psicanalista e pessoa em
        constante formação
      </p>
    </div>
  );
};
