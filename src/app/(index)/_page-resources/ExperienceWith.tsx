import Banner from "@/shared/components/Banner/Banner";
import ContentWrapper from "@/shared/components/ContentWrapper";
import CheckMarkFilled from "@/shared/components/Icons/Carbon/CheckMarkFilled";
import { twMerge } from "tailwind-merge";

export default function ExperienceWith() {
  return (
    <ContentWrapper id="experiencia" element="section" className="mt-32">
      <h5 className="text-5xl font-bold text-nandor-900 md:text-6xl">Experiência com</h5>
      <Banner stylization="secondary" href="#contato">
        <ul className="z-[1] grid max-w-[652px] gap-3 md:grid-cols-2">
          {texts.map((i, key) => (
            <Item key={key} text={i} className={key === 3 ? "mt-10 md:mt-0" : ""} />
          ))}
        </ul>
      </Banner>
    </ContentWrapper>
  );
}

const texts = [
  "Crianças com autismo",
  "Clínica racializada",
  "Público LGBTQIPN+",
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
