import React, { Fragment } from "react";

import AliceLogo from "@/shared/components/AliceLogo";
import ContentWrapper from "@/shared/components/ContentWrapper";
import PopUpCaller from "@/shared/components/PopUp/PopUpCaller";
import { twMerge } from "tailwind-merge";

import AdultIcon from "./SVGs/AdultIcon";
import KidIcon from "./SVGs/KidIcon";
import MiddleCardPlants from "./SVGs/MiddleCardPlants";
import TeenIcon from "./SVGs/TeenIcon";

export default function WorkWith() {
  return (
    <section id="atendimento" className="relative overflow-x-clip pt-32">
      <ContentWrapper element="div" className="relative flex flex-col">
        <h2 className="text-5xl font-bold text-nandor-900 md:text-6xl">Atendo</h2>
        <ul className="z-[1] mt-9 flex w-full flex-wrap items-center justify-center gap-6">
          {cardsConfig.map((card) => (
            <Card key={card.name} {...card} />
          ))}
        </ul>
      </ContentWrapper>
    </section>
  );
}

type TCard = { name: string; description: string; icon: React.ElementType; className?: string; children?: React.ReactNode; content: string[] };

const Card = (props: TCard) => {
  return (
    <li className={twMerge("relative flex w-full flex-col items-center overflow-hidden rounded-2xl !bg-nandor-700  py-16 lg:max-w-[390px]", props.className || "")}>
      <props.icon />
      <h6 className="text-2xl font-semibold text-nandor-100">{props.name}</h6>
      <p className="text-sm text-nandor-200">{props.description}</p>
      <PopUpCaller element="button" className="mt-6 border-b border-b-nandor-300 py-1 text-sm text-nandor-300" popUpContent={<PopUpContent content={props.content} />}>
        saiba mais
      </PopUpCaller>
      {props.children}
    </li>
  );
};

const cardsConfig: TCard[] = [
  {
    name: "Crianças",
    description: "típicas e atípicas",
    icon: KidIcon,
    children: <MiddleCardPlants className="pointer-events-none absolute inset-0" />,
    content: [
      "Atendo crianças típicas e atípicas a partir de dois anos de idade no consultório presencial e a partir de seis anos na modalidade online. ",
      "O atendimento com criança envolve sessões com os responsáveis que podem ser individuais ou em conjunto.",
      "Qualquer dúvida entre em contato comigo!",
    ],
  },
  {
    name: "Adolescentes",
    description: "típicos e atípicos",
    icon: TeenIcon,
    className: "from-nandor-500/60 bg-gradient-to-l to-nandor-700",
    content: [
      "Atendo pré-adolescentes e adolescentes, típicos e atípicos, no modelo online ou presencialmente no consultório.",
      "Para acompanhamento do caso, sessões com os responsáveis são necessárias. De todo modo, o sigilo é condição para tratamento.",
      "Qualquer dúvida entre em contato comigo!",
    ],
  },
  {
    name: "Adultos",
    description: "típicos e atípicos",
    icon: AdultIcon,
    children: <MiddleCardPlants className="pointer-events-none absolute right-0 top-0 rotate-180" />,
    content: [
      "Atendo adultos típicos e atípicos presencialmente no consultório ou de maneira online para brasileiros em todo o mundo.",
      "Também atendo idosos presencialmente ou online caso exista a possibilidade de uso pouco assistido da tecnologia.",
      "Qualquer dúvida entre em contato comigo!",
    ],
  },
];

const PopUpContent = (props: { content: string[] }) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-md bg-loafer-300 p-12 text-center text-nandor-800">
      <AliceLogo className="mx-auto mb-6 h-16 w-16" />
      {props.content.map((item) => (
        <p key={item} className="">
          {item}
        </p>
      ))}
    </div>
  );
};
