import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

import CustomLink from "../Clickables/Link";
import ExpPlant from "./ExpPlant";

export default function Banner(props: { children: ReactNode; stylization: TBannerStylization; href: string; className?: string }) {
  const stylization = bannerStylization(props.stylization);

  return (
    <div
      className={twMerge(
        "relative mt-8 flex flex-wrap items-center justify-between overflow-hidden rounded-[36px] px-5 py-12 md:px-9 md:py-24",
        stylization.container,
        props.className,
      )}>
      <ExpPlant className={stylization["plant-fill"]} />
      {props.children}
      <CustomLink href={props.href} stylization={{ variant: stylization.button, size: "md" }} className="z-[1] mx-auto mt-10 w-full max-w-[264px] md:m-0">
        Vamos?
      </CustomLink>
    </div>
  );
}

type TBannerStylization = "primary" | "secondary";
const bannerStylization = (variant: TBannerStylization) => {
  switch (variant) {
    case "primary":
      return { container: "bg-nandor-700", button: "secondary" as const, "plant-fill": "fill-nandor-400" };
    case "secondary":
      return { container: "bg-loafer-300", button: "primary" as const, "plant-fill": "fill-loafer-800" };
  }
};
