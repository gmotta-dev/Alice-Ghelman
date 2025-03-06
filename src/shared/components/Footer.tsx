import Link from "next/link";

import AliceLogo from "./AliceLogo";
import ContentWrapper from "./ContentWrapper";
import Location from "./Icons/Carbon/Location";
import LogoInstagram from "./Icons/Carbon/LogoInstagram";
import LogoLinkedin from "./Icons/Carbon/LogoLinkedin";
import Mail from "./Icons/Carbon/Mail";
import Phone from "./Icons/Carbon/Phone";

export default function Footer() {
  return (
    <footer className="bg-nandor-700">
      <ContentWrapper element="div" className="flex flex-col justify-between gap-4 py-16 lg:flex-row lg:flex-wrap lg:items-center lg:py-20">
        <AliceLogo className="h-[128px] w-[128px] text-nandor-300 lg:h-[256px] lg:w-[256px]" />
        <div className="mt-16 flex w-full max-w-[700px] flex-col gap-8 md:mt-28 md:flex-row lg:mt-0">
          <Info name="Contato" items={contactGroup} />
          <Info name="Redes Sociais" items={socialGroup} />
        </div>
        <small className="w-full text-center text-nandor-400">©2024 Alice Ghelman. Todos os direitos reservados</small>
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
  { type: "link", href: "aliceghelman@gmail.com", label: "aliceghelman@gmail.com", icon: Mail },
  { type: "link", href: "https://wa.me/5521942464416", label: "021 94246-4416 ", icon: Phone },
  { type: "span", label: "Rua Doutor Borman n⁰ 23, Centro, Niterói", icon: Location },
  { type: "span", label: "Rua Desembargador Izidro nº 18, Tijuca, Rio de Janeiro", icon: Location },
];

const socialGroup: InfoItem[] = [
  { type: "link", href: "https://www.instagram.com/pensandoopsiquismo/", label: "pensandoopsiquismo", icon: LogoInstagram },
  { type: "link", href: "https://www.linkedin.com/in/aliceghelman/", label: "Alice_Ghelman99", icon: LogoLinkedin },
];
