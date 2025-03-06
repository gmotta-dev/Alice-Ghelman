import Image from "next/image";
import Link from "next/link";

import ArrowRight from "../Icons/Carbon/ArrowRight";
import CurveSVG from "./CurveSVG";

export default function ArticleGroup(props: { classNames?: Partial<Record<"container", string>> }) {
  return (
    <div className={`flex flex-col items-center gap-6 md:flex-row ${props.classNames?.container}`}>
      <Article
        image="/images/artigo-1.png"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        link="https://www.google.com"
        stylization={{ orientation: "portrait" }}
      />
      <div className="flex flex-col gap-6">
        <Article
          image="/images/artigo-1.png"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          link="https://www.google.com"
          stylization={{ orientation: "landscape" }}
        />
        <Article
          image="/images/artigo-1.png"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          link="https://www.google.com"
          stylization={{ orientation: "landscape" }}
        />
      </div>
    </div>
  );
}

const Article = (props: { image: string; title: string; link: string; stylization: TArticleStylization }) => {
  const stylization = articleStylization(props.stylization);

  return (
    <Link href={props.link} className="group/article relative cursor-pointer overflow-hidden rounded-2xl">
      <Image
        src={props.image}
        alt="artigo-1"
        width={stylization.image.width}
        height={stylization.image.height}
        className={`${stylization.classNames.image} rounded-2xl object-cover transition-transform duration-300 group-hover/article:scale-[1.02]`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 flex h-[120px] w-full items-center justify-center gap-4 bg-neutral-50 p-4 min-[460px]:rounded-tr-2xl ${stylization.classNames["text-wrapper"]}`}>
        <CurveSVG className="absolute -left-[1px] top-1 hidden -translate-y-full min-[460px]:block" />
        <p className="line-clamp-3 font-medium text-nandor-800 md:text-lg">{props.title}</p>
        <span className="ml-auto flex min-h-8 min-w-8 items-center justify-center rounded-full bg-loafer-950">
          <ArrowRight className="min-h-4 min-w-4 -rotate-45 text-loafer-400 transition-transform duration-300 group-hover/article:rotate-0" />
        </span>
        <CurveSVG className="absolute -right-14 bottom-[-1px] min-[460px]:block" />
      </div>
    </Link>
  );
};

type TArticleStylization = { orientation: "portrait" | "landscape" };

const articleStylization = (props: TArticleStylization) => {
  if (props.orientation === "portrait") return { classNames: { ["text-wrapper"]: "max-w-[386px]", image: "max-h-[400px] md:min-h-[636px]" }, image: { width: 494, height: 636 } };
  else return { classNames: { ["text-wrapper"]: "max-w-[494px]", image: "max-h-[300px]" }, image: { width: 697, height: 300 } };
};
