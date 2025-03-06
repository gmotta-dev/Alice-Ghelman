import { ComponentProps } from "react";

import Link from "next/link";

import ButtonWrapper from "./ButtonWrapper";

export default function CustomLink(props: ComponentProps<typeof Link> & Omit<ComponentProps<typeof ButtonWrapper>, "element">) {
  return (
    <ButtonWrapper element={Link as any} {...props}>
      {props.children}
    </ButtonWrapper>
  );
}
