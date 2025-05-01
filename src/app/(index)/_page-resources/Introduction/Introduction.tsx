import Button from "@/shared/components/Clickables/Button";
import CustomLink from "@/shared/components/Clickables/Link";
import ContentWrapper from "@/shared/components/ContentWrapper";

import ParallaxLake from "./ParallaxLake";
import PlantSVG from "./PlantSVG";

export default function Introduction() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-nandor-700 pt-32">
      <ContentWrapper element="div" className="flex flex-col items-start justify-center md:pb-48 lg:flex-row lg:justify-between lg:pb-[220px]">
        <header className="max-w-[510px] md:max-w-[45%] lg:max-w-[560px]">
          <p className="text-loafer-300">Olá, me chamo</p>
          <h1 className="mt-2 font-poppins text-6xl text-nandor-50 min-[1300px]:text-9xl">Alice Martins  Ghelman</h1>
          <p className="mt-2 text-nandor-200">Juntos podemos encontrar uma versão de si que faça mais sentido para você.</p>
          <CustomLink href="#contato" className="mt-6 block w-full max-w-[288px] md:mt-9" stylization={{ variant: "secondary" }}>
            Vamos?
          </CustomLink>
        </header>

        <ParallaxLake />
      </ContentWrapper>
      <PlantSVG />
    </section>
  );
}
