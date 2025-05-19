import LogoWhatsapp from "@/shared/components/Icons/LogoWhatsapp";
import Link from "next/link";

import AliceLogo from "../../shared/components/AliceLogo";
import ContentWrapper from "../../shared/components/ContentWrapper";
import LogoInstagram from "../../shared/components/Icons/Carbon/LogoInstagram";
import LogoLinkedin from "../../shared/components/Icons/Carbon/LogoLinkedin";
import Mail from "../../shared/components/Icons/Carbon/Mail";

export default function Footer() {
  return (
    <footer className="bg-nandor-700">
      <ContentWrapper element="div" className="flex flex-col justify-between gap-4 py-16 lg:flex-row lg:flex-wrap lg:items-center lg:py-20">
        <AliceLogo className="h-[128px] w-[128px] text-nandor-300 lg:h-[256px] lg:w-[256px]" />
        <div className="mt-16 flex w-full max-w-[700px] flex-col gap-16 md:mt-28 md:flex-row lg:mt-0 lg:justify-end">
          <Info name="Contato" items={contactGroup} />
          <Info name="Redes Sociais" items={socialGroup} />
        </div>
        <small className="mt-8 w-full text-center text-nandor-400 md:mt-0">©2025 Alice Ghelman. Todos os direitos reservados</small>
      </ContentWrapper>
    </footer>
  );
}

type InfoItem = { type: "link"; href: string; label: string; icon: React.ElementType } | { type: "span"; label: string; icon: React.ElementType };

const Info = (props: { name: string; items: InfoItem[] }) => {
  return (
    <div className="text-nandor-300">
      <h3 className="text-3xl font-medium">{props.name}</h3>
      <ul>
        {props.items.map((item) => (
          <li key={item.label} className="flex items-center gap-2 ">
            <item.icon className="h-4 w-4 text-nandor-200" />
            {item.type === "span" ? (
              <span>{item.label}</span>
            ) : (
              <Link href={item.href} className="text-nandor-300 transition-colors hover:text-nandor-300/90" target="_blank" rel="noopener noreferrer">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const contactGroup: InfoItem[] = [
  { type: "link", href: "mailto:psialiceghelman@gmail.com", label: "psialiceghelman@gmail.com", icon: Mail },
  { type: "link", href: "https://wa.me/+5521976610030", label: "21 97661-0030", icon: LogoWhatsapp },
];

const socialGroup: InfoItem[] = [
  { type: "link", href: "https://www.instagram.com/pensandoopsiquismo/", label: "pensandoopsiquismo", icon: LogoInstagram },
  { type: "link", href: "https://www.linkedin.com/in/alice-martins-ghelman-9647241b0/", label: "Alice Martins Ghelman", icon: LogoLinkedin },
];
