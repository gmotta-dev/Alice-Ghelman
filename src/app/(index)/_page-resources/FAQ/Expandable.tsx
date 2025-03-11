"use client";

import { ReactNode, useState } from "react";

import CaretDown from "@/shared/components/Icons/Carbon/CaretDown";

export default function Expandable(props: { title: string; text: string; icon: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)} className="rounded-lg bg-loafer-50 p-3">
      <p className="flex items-center gap-2 text-left text-nandor-900 lg:text-xl">
        {props.icon}
        {props.title}
        <CaretDown className={`ml-auto transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </p>
      <p className={`px-8 text-left text-nandor-800 transition-all duration-300 ${isOpen ? "mt-4 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        {props.text}
      </p>
    </button>
  );
}
