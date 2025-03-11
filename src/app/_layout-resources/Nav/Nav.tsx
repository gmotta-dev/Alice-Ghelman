import AliceLogo from "@/shared/components/AliceLogo";
import ContentWrapper from "@/shared/components/ContentWrapper";

import DesktopAnchors from "./DesktopAnchors";
import MobileAnchors from "./MobileAnchors";

export default function Nav() {
  return (
    <ContentWrapper element="nav" className="animate-slide-top-bottom fixed  left-1/2 top-4 z-50 max-w-[1300px] -translate-x-1/2">
      <ContentWrapper element="div" className=" flex items-center justify-between rounded-lg bg-nandor-50 px-8 py-2 text-nandor-700 shadow-sm">
        <a href="#inicio">
          <AliceLogo />
        </a>
        <DesktopAnchors />
        <MobileAnchors />
      </ContentWrapper>
    </ContentWrapper>
  );
}
