"use client";

import { Fragment, useState } from "react";

import ContentWrapper from "@/shared/components/ContentWrapper";
import { Hamburguer } from "@/shared/components/Hamburguer";
import Link from "next/link";

import { navAnchors } from "./nav-anchors";

export default function MobileAnchors() {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <Fragment>
      <Hamburguer expandNav={expandNav} setExpandNav={setExpandNav} className="lg:hidden" />
      <ContentWrapper
        element="div"
        className={`flex lg:hidden ${expandNav ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} absolute left-1/2 top-[140%] z-50 w-[93%] -translate-x-1/2 flex-col items-center justify-center gap-4 rounded-lg bg-nandor-600 py-6 transition-all duration-300`}>
        {navAnchors.map((anchor) => (
          <Link key={anchor.href} href={anchor.href} className="w-full rounded-lg bg-nandor-100/50 py-4 text-center" onClick={() => setExpandNav(false)}>
            {anchor.label}
          </Link>
        ))}
      </ContentWrapper>
    </Fragment>
  );
}
