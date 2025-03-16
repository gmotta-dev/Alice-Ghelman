import ContentWrapper from "@/shared/components/ContentWrapper";

import Title from "../Title";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <ContentWrapper id="contato" element="section" className="mt-32">
      <Title className="mb-6">Contato</Title>
      <div className="flex w-full flex-wrap items-start justify-between gap-x-32 gap-y-16">
        <ContactForm />
        <ContactCards />
      </div>
    </ContentWrapper>
  );
}
