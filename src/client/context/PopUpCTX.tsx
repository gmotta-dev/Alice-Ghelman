"use client";

import { createContext } from "react";

import PopUp from "@/shared/components/PopUp/PopUp";
import usePopUpStates, { TUsePopUpStates } from "@/shared/components/PopUp/usePopUpStates";

export const popUpCTX = createContext<TUsePopUpStates>({} as TUsePopUpStates);

export default function PopUpProvider({ children }: { children: React.ReactNode }) {
  const popUpStates = usePopUpStates();

  console.log(popUpStates.isOpen);

  return (
    <popUpCTX.Provider value={popUpStates}>
      <PopUp {...popUpStates} />
      {children}
    </popUpCTX.Provider>
  );
}
