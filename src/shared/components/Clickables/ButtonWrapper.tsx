import { twMerge } from "tailwind-merge";

type ElementType = "button" | "div";

type TButtonWrapper<T extends ElementType> = {
  element: T;
  children: React.ReactNode;
  stylization: TButtonWrapperStylization;
} & React.ComponentPropsWithoutRef<T>;

export default function ButtonWrapper<T extends ElementType>({ element, children, stylization = { variant: "primary" }, ...props }: TButtonWrapper<T>) {
  const Element = element;
  const stylizationResult = buttonWrapperStylization(stylization);

  return (
    <Element {...(props as any)} className={twMerge(" rounded-lg text-center font-medium transition-colors duration-500 ", stylizationResult, props.className)}>
      {children}
    </Element>
  );
}

type TButtonWrapperStylization = {
  variant: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
};

const buttonWrapperStylization = ({ variant, size = "md" }: TButtonWrapperStylization) => {
  let className = " ";

  switch (variant) {
    case "primary":
      className += "bg-nandor-950 text-loafer-300 hover:bg-nandor-900";
      break;
    case "secondary":
      className += "bg-loafer-300 text-nandor-900 hover:bg-loafer-400 ";
      break;
  }

  switch (size) {
    case "sm":
      className += " px-4 py-2 ";
      break;
    case "md":
      className += " px-6 py-3 ";
  }

  return className;
};
