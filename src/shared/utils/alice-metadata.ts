import { Metadata } from "next";

export const aliceMetadata = (props: { title: string; description: string; loaderOG?: string }) => {
  const img = props.loaderOG || "SEO-default.webp";

  const images = [{ url: img, width: 1000, height: 800 }];
  const description = props.description;

  const metadata: Metadata = { title: props.title, description, openGraph: { images, description }, twitter: { images, description } };
  return metadata;
};
