import Location from "@/shared/components/Icons/Carbon/Location";
import Mail from "@/shared/components/Icons/Carbon/Mail";
import LogoWhatsapp from "@/shared/components/Icons/LogoWhatsapp";
import { twMerge } from "tailwind-merge";

export default function ContactCards() {
  return (
    <ul className="flex w-full flex-wrap gap-4 lg:max-w-[607px]">
      <Card
        element="link"
        href="mailto:psialiceghelman@gmail.com"
        icon={Mail}
        texts={["psialiceghelman@gmail.com"]}
        className="w-full rounded-b-xl rounded-t-[32px] bg-bismark-300 text-bismark-600 hover:bg-bismark-200 lg:max-w-[356px] lg:rounded-tr-xl"
      />
      <Card
        element="link"
        href="https://wa.me/+5521976610030"
        icon={LogoWhatsapp}
        texts={["21 97661-0030"]}
        className="w-full rounded-xl bg-nandor-700 text-nandor-200 hover:bg-nandor-600 lg:flex-1 lg:rounded-tr-[32px]"
      />
      <Card
        element="div"
        icon={Location}
        texts={["Rua Desembargador Izidro nº 18, Tijuca, Rio de Janeiro", "Rua Doutor Borman n⁰ 23, Centro, Niterói"]}
        className="w-full rounded-b-[32px] rounded-t-xl bg-loafer-300 text-loafer-700"
      />
    </ul>
  );
}

type TCardProps = { icon: React.ElementType; texts: string[]; className?: string } & ({ element: "div" } | { element: "link"; href: string });

const Card = ({ element, icon: Icon, texts, ...props }: TCardProps) => {
  const Element = element === "div" ? "div" : "a";

  return (
    <Element {...props} className={twMerge("flex flex-col gap-2 px-9 py-6 transition-all duration-300", props.className)}>
      <Icon className="h-8 w-8 lg:h-12 lg:w-12" />
      {texts.map((text) => (
        <p key={text} className="lg:text-xl">
          {text}
        </p>
      ))}
    </Element>
  );
};
