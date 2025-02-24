import { HTMLAttributes } from "react";

export default function ContentWrapper({ componentRef, ...props }: TContentWrapper) {
  return (
    <props.element {...props} ref={componentRef} className={`mx-auto w-full max-w-[1272px] px-4 lg:px-6 ${props.className}`}>
      {props.children}
    </props.element>
  );
}

export type TContentWrapper = { element: "div" | "section"; componentRef?: any } & HTMLAttributes<HTMLDivElement>;
