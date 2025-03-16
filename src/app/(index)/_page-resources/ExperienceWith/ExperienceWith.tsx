import Button from "@/shared/components/Clickables/Button";
import ContentWrapper from "@/shared/components/ContentWrapper";
import CheckMarkFilled from "@/shared/components/Icons/Carbon/CheckMarkFilled";
import { twMerge } from "tailwind-merge";

import ExpPlant from "./ExpPlant";

export default function ExperienceWith() {
  return (
    <ContentWrapper id="experiencia" element="section" className="mt-32">
      <h5 className="text-5xl font-bold text-nandor-900 md:text-6xl">Experiência com</h5>
      <div className="relative mt-8 flex flex-wrap items-center justify-between overflow-hidden rounded-[36px] bg-loafer-300 px-5 py-12 md:items-start md:px-9 md:py-28">
        <ExpPlant />
        <ul className="z-[1] grid max-w-[652px] gap-3 md:grid-cols-2">
          {texts.map((i, key) => (
            <Item key={key} text={i} className={key === 3 ? "mt-10 md:mt-0" : ""} />
          ))}
        </ul>
        <Button stylization={{ variant: "primary", size: "md" }} className="z-[1] mx-auto mt-10 w-full max-w-[264px] md:mx-0">
          Agendar consulta
        </Button>
      </div>
    </ContentWrapper>
  );
}

const texts = [
  "Crianças com autismo",
  "Clínica racializada",
  "Público Lgbtqia+",
  "Transtorno do espectro autista em todas as idade",
  "Pessoas com deficiência",
  "Transtorno dissociativo de identidade",
];

const Item = (props: { text: string; className?: string }) => {
  return (
    <li className={twMerge("z-[1] flex items-center gap-3 text-loafer-800 lg:whitespace-nowrap", props.className || "")}>
      <CheckMarkFilled className="min-h-6 min-w-6" />
      <span>{props.text}</span>
    </li>
  );
};
