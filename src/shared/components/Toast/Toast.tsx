"use client";

import { JSX, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import CheckMarkFilled from "../Icons/Carbon/CheckMarkFilled";
import ErrorFilled from "../Icons/Carbon/ErrorFilled";
import { TToastComponentAndHookCommonTypes } from "./types";
import useToastStates from "./useToastStates";

export default function Toast({ toasts }: ReturnType<typeof useToastStates> & TToastComponentAndHookCommonTypes): JSX.Element | null {
  const [hovering, setHovering] = useState(false);
  const [height, setHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!toasts.length) setHovering(false);

    if (ref.current) setHeight(ref.current.offsetHeight);

    setIsClient(typeof window === "object");
  }, [toasts]);

  if (!isClient) return null;

  const dialogElement = document.getElementsByTagName("dialog")[0];

  return createPortal(
    <ul onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="absolute">
      <AnimatePresence>
        {toasts.map((toast, key) => {
          // As you can have an array of toasts, to find the exact stylization we need to use this function inside of map to return toast stylization correctly

          const isSuccess = toast?.stylization?.variant === "success";

          return (
            <motion.li
              key={toast?.id}
              style={{ zIndex: (key + 1) * 100 }}
              ref={ref}
              initial={{ opacity: 0, bottom: "-30px" }}
              animate={{ opacity: 1, bottom: hovering ? `${(toasts.length - 1 - key) * (height + 12) + 35}px` : `${(toasts.length - 1 - key) * 5 + 35}px` }}
              exit={{ opacity: 0, bottom: "-100px" }}
              transition={{ stiffness: 0, duration: 0.5 }}
              className={twMerge(
                "fixed left-1/2 flex w-full max-w-[358px] -translate-x-1/2 transform items-start justify-start gap-2 rounded-md border bg-nandor-950 py-6 pl-10 pr-[56px] lg:left-auto lg:right-[3%] lg:max-w-[450px] lg:-translate-x-0",
                toast?.classNames?.container,
                isSuccess ? "border-loafer-300" : "border-red-500",
              )}>
              <div className={`flex gap-2 ${toast?.classNames?.["texts-wrapper"] || ""}`}>
                {isSuccess ? (
                  <CheckMarkFilled className={twMerge("flex h-6 w-6 items-start justify-start rounded-full text-loafer-300")} />
                ) : (
                  <ErrorFilled className={twMerge("flex h-6 w-6 items-start justify-start text-red-500")} />
                )}
                <p className={`text-lg font-semibold ${isSuccess ? "text-loafer-100" : "text-red-400"}`}>{toast?.title}</p>
              </div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>,
    dialogElement || document.getElementsByTagName("main")[0] || document.body,
  );
}
