import { ComponentProps } from "react";

import ButtonWrapper from "./ButtonWrapper";

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & Omit<ComponentProps<typeof ButtonWrapper>, "element">) {
  return (
    <ButtonWrapper element="button" {...props}>
      {props.children}
    </ButtonWrapper>
  );
}
