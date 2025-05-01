import Banner from "@/shared/components/Banner/Banner";
import ContentWrapper from "@/shared/components/ContentWrapper";
import Quotes from "@/shared/components/Icons/Carbon/Quotes";
import Image from "next/image";

import LineSVG from "./LineSVG";

export default function AliceBanner() {
  return (
    <section className="relative overflow-hidden">
      <LineSVG className="absolute left-0 top-[60%] -translate-y-1/2" />

      <ContentWrapper element="div" className="mt-32">
        <Banner stylization="primary" href="https://wa.me/5521942464416" className="flex-col lg:flex-row lg:flex-nowrap">
          <div className="flex flex-col items-center justify-center gap-14 lg:flex-row lg:justify-between">
            <Image src="/images/alice-md.webp" width={182} height={175} alt="Alice" />

            <span className="mb-4 flex max-w-[489px] items-center justify-between gap-6 text-nandor-200 lg:mb-0">
              <Quotes className="mb-auto min-h-6 min-w-6 md:min-h-8 md:min-w-8" />
              <span className="max-w-[370px] py-2 text-lg font-medium md:text-xl">Juntos podemos encontrar uma versão de si que faça mais sentido para você.</span>
              <Quotes className="mt-auto min-h-6 min-w-6 md:min-h-8 md:min-w-8" />
            </span>
          </div>
        </Banner>
      </ContentWrapper>
    </section>
  );
}
