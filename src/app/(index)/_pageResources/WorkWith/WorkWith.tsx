import React, { Fragment } from "react";

import ContentWrapper from "@/shared/components/ContentWrapper";
import { twMerge } from "tailwind-merge";

import AdultIcon from "./SVGs/AdultIcon";
import KidIcon from "./SVGs/KidIcon";
import MiddleCardPlants from "./SVGs/MiddleCardPlants";
import Plant from "./SVGs/Plant";
import TeenIcon from "./SVGs/TeenIcon";

export default function WorkWith() {
  return (
    <section className="relative overflow-x-clip pt-32">
      <ContentWrapper element="div" className="relative flex flex-col">
        <h2 className="text-5xl font-bold text-nandor-900 md:text-6xl">Atendo</h2>
        <ul className="z-[1] mt-9 flex w-full flex-wrap items-center justify-center gap-6">
          {cardsConfig.map((card) => (
            <Card key={card.name} {...card} />
          ))}
        </ul>
        <Plant />
      </ContentWrapper>
    </section>
  );
}

type TCard = { name: string; description: string; icon: React.ElementType; className?: string; children?: React.ReactNode };

const Card = (props: TCard) => {
  return (
    <li className={twMerge("relative flex w-full flex-col items-center overflow-hidden rounded-2xl !bg-nandor-700  py-16 lg:max-w-[390px]", props.className || "")}>
      <props.icon />
      <h6 className="text-2xl font-semibold text-nandor-100">{props.name}</h6>
      <p className="text-sm text-nandor-200">{props.description}</p>
      <button className="mt-6 border-b border-b-nandor-300 py-1 text-sm text-nandor-300">saiba mais</button>
      {props.children}
    </li>
  );
};

const cardsConfig: TCard[] = [
  { name: "Crianças", description: "típicas e atípicas", icon: KidIcon, className: "from-nandor-500/80 bg-gradient-to-r to-nandor-700" },
  {
    name: "Adolescentes",
    description: "típicos e atípicos",
    icon: TeenIcon,
    children: (
      <Fragment>
        <MiddleCardPlants className="absolute inset-0" />
        <MiddleCardPlants className="absolute right-0 top-0 rotate-180" />
      </Fragment>
    ),
  },
  { name: "Adultos", description: "típicos e atípicos", icon: AdultIcon, className: "from-nandor-500/80 bg-gradient-to-l to-nandor-700" },
];
