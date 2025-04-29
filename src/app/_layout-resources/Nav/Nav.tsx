import AliceLogo from "@/shared/components/AliceLogo";
import ContentWrapper from "@/shared/components/ContentWrapper";
import Link from "next/link";

import DesktopAnchors from "./DesktopAnchors";
import MobileAnchors from "./MobileAnchors";
import NavWrapperClient from "./NavWrapperClient";

export default function Nav() {
  return (
    <ContentWrapper element="nav" className="fixed left-1/2  top-4 z-50 max-w-[1300px] -translate-x-1/2 animate-slide-top-bottom">
      <NavWrapperClient>
        <Link href="/">
          <AliceLogo />
        </Link>
        <DesktopAnchors />
        <MobileAnchors />
      </NavWrapperClient>
    </ContentWrapper>
  );
}
