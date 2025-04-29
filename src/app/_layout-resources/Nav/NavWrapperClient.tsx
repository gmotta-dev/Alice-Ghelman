"use client";

import { useEffect, useState } from "react";

import ContentWrapper from "@/shared/components/ContentWrapper";

export default function NavWrapperClient(props: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ContentWrapper
      element="div"
      className={`flex items-center justify-between rounded-full transition-all duration-300 ${hasScrolled ? "border-nandor-600" : "border-transparent"} border bg-nandor-700 px-8 py-3 text-loafer-100`}>
      {props.children}
    </ContentWrapper>
  );
}
