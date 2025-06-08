import { FC } from "react";

export const Hamburguer: FC<{ expandNav: boolean; setExpandNav: (expandNav: boolean) => void; className?: string }> = (props) => {
  const { expandNav, setExpandNav, className } = props;

  const spans = [`${expandNav ? "translate-y-[5px] rotate-[135deg]" : ""}`, `${expandNav ? "opacity-0 hidden" : ""}`, `${expandNav ? "-translate-y-1 -rotate-[135deg]" : ""}`];

  return (
    <button
      className={`${expandNav ? "gap-[6px]" : "gap-[3px]"} group mx-3 flex h-[15px] w-[18px] flex-col items-center justify-center ${className}`}
      onClick={() => setExpandNav(!expandNav)}>
      {spans.map((i, key) => (
        <span key={key} className={`h-[3px] w-full bg-nandor-300  transition-all duration-300 group-hover:bg-nandor-400 ${i}`} />
      ))}
      <span className="sr-only">Abrir menu</span>
    </button>
  );
};
