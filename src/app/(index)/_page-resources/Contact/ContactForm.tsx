"use client";

import Button from "@/shared/components/Clickables/Button";
import TextArea from "@/shared/components/Inputs/TextArea";
import TextInput from "@/shared/components/Inputs/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contactSchema } from "./contactSchema";

export default function ContactForm() {
  const formStates = useForm<z.infer<typeof contactSchema>>({ resolver: zodResolver(contactSchema) });

  return (
    <form className="flex w-full flex-1 flex-wrap gap-4 lg:min-w-[350px]">
      <TextInput {...formStates.register("name")} error={formStates.formState.errors.name?.message} placeholder="Nome completo" className="flex-1" />
      <TextInput {...formStates.register("email")} error={formStates.formState.errors.email?.message} placeholder="Email" className="flex-1" />
      <TextInput {...formStates.register("phone")} error={formStates.formState.errors.phone?.message} placeholder="Telefone" className="w-full" />
      <TextArea
        {...formStates.register("message")}
        error={formStates.formState.errors.message?.message}
        placeholder="Mensagem"
        classNames={{ container: "w-full", input: "h-[136px]" }}
      />
      <Button stylization={{ variant: "primary" }} className="w-full">
        Enviar mensagem
      </Button>
    </form>
  );
}
