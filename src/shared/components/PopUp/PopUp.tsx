"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { TUsePopUpStates } from "./usePopUpStates";

export default function PopUp(props: TUsePopUpStates) {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
          onClick={(e) => e.target === e.currentTarget && props.close()}>
          {props.content}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
