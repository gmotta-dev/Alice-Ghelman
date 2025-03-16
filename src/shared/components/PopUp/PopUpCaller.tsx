"use client";

import React, { use } from "react";

import { popUpCTX } from "@/client/context/PopUpCTX";

export default function PopUpCaller(props: { popUpContent: React.ReactNode; children: React.ReactNode; element: "button" | React.ElementType; className?: string }) {
  const popUpStates = use(popUpCTX);

  const Element = props.element === "button" ? "button" : props.element;

  return (
    <Element onClick={() => popUpStates.setPopUpContent(props.popUpContent)} className={props.className}>
      {props.children}
    </Element>
  );
}
