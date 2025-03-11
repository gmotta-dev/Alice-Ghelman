import Button from "@/shared/components/Clickables/Button";
import ContentWrapper from "@/shared/components/ContentWrapper";

import ParallaxLake from "./ParallaxLake";
import PlantSVG from "./PlantSVG";

export default function Introduction() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-nandor-700 pt-32">
      <ContentWrapper element="div" className="flex flex-col items-start justify-center md:pb-48 lg:flex-row lg:justify-between lg:pb-[220px]">
        <header className="max-w-[510px] md:max-w-[45%] lg:max-w-[510px]">
          <p className="text-loafer-300">Olá, me chamo</p>
          <h1 className="mt-2 font-poppins text-6xl text-nandor-50 min-[1300px]:text-9xl">Alice Martins  Ghelman</h1>
          <p className="mt-2 text-nandor-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur.</p>
          <Button className="mt-6 w-full max-w-[288px] md:mt-9" stylization={{ variant: "secondary" }}>
            Agendar consulta
          </Button>
        </header>

        <ParallaxLake />
      </ContentWrapper>
      <PlantSVG />
    </section>
  );
}
