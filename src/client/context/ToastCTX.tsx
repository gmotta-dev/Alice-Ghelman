"use client";

import { createContext } from "react";

import Toast from "@/shared/components/Toast/Toast";
import useToastStates from "@/shared/components/Toast/useToastStates";

export const toastCTX = createContext<ReturnType<typeof useToastStates>>({} as ReturnType<typeof useToastStates>);

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const toastStates = useToastStates();

  return (
    <toastCTX.Provider value={toastStates}>
      <Toast {...toastStates} />
      {children}
    </toastCTX.Provider>
  );
}
