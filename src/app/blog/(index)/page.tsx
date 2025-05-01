import { aliceMetadata } from "@/shared/utils/alice-metadata";

import AliceBanner from "./_page-resources/AliceBanner/AliceBanner";
import Articles from "./_page-resources/Articles";
import Introduction from "./_page-resources/Introduction";

export const metadata = aliceMetadata({ title: "Alice Ghelman | Blog", description: "Blog dedicado aos meus artigos." });

export default function Blog() {
  return (
    <main>
      <Introduction />
      <AliceBanner />
      <Articles />
    </main>
  );
}
