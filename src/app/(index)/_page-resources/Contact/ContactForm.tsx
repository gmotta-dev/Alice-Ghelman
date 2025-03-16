"use client";

import { ChangeEvent } from "react";

import { useSafeExecute } from "@/client/hooks/useSafeExecute";
import Button from "@/shared/components/Clickables/Button";
import ArrowRight from "@/shared/components/Icons/Carbon/ArrowRight";
import ProgressBarRound from "@/shared/components/Icons/Carbon/ProgressBarRound";
import TextArea from "@/shared/components/Inputs/TextArea";
import TextInput from "@/shared/components/Inputs/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contactAction } from "./action/contact-action";
import { contactSchema } from "./contactSchema";

export default function ContactForm() {
  const formStates = useForm<z.infer<typeof contactSchema>>({ resolver: zodResolver(contactSchema) });
  const { execute } = useSafeExecute();

  return (
    <form className="flex w-full flex-1 flex-wrap gap-4 lg:min-w-[350px]" onSubmit={formStates.handleSubmit((body) => execute(contactAction, body))}>
      <TextInput {...formStates.register("name")} error={formStates.formState.errors.name?.message} placeholder="Nome completo" className="flex-1" />
      <TextInput {...formStates.register("email")} error={formStates.formState.errors.email?.message} placeholder="Email" className="flex-1" />
      <TextInput
        {...formStates.register("phone", { onChange: (e) => applyInputMask(e, "(##) #####-####") })}
        error={formStates.formState.errors.phone?.message}
        placeholder="Telefone"
        className="w-full"
      />
      <TextArea
        {...formStates.register("message")}
        error={formStates.formState.errors.message?.message}
        placeholder="Mensagem"
        classNames={{ container: "w-full", input: "h-[136px]" }}
      />
      <Button stylization={{ variant: "primary" }} className="w-full">
        Enviar mensagem {formStates.formState.isSubmitting ? <ProgressBarRound className="ml-2 inline-block h-4 w-4" /> : <ArrowRight className="ml-2 inline-block h-4 w-4" />}
      </Button>
    </form>
  );
}

const applyInputMask = (event: ChangeEvent<HTMLInputElement>, mask: string) => {
  const { value } = event.target;
  let newValue = "";
  let valueIndex = 0;
  let maskIndex = 0;
  let digitCount = 0;
  const maxDigits = mask.replace(/[^#0]/g, "").length; // Count number of digit placeholders

  while (maskIndex < mask.length && valueIndex < value.length && digitCount < maxDigits) {
    const maskChar = mask[maskIndex];
    const valueChar = value[valueIndex];

    if (maskChar === "#" || maskChar === "0") {
      if (/\d/.test(valueChar)) {
        newValue += valueChar;
        valueIndex++;
        digitCount++;
      } else {
        valueIndex++; // Skip non-digit character
      }
      maskIndex++;
    } else {
      newValue += maskChar;
      if (maskChar === valueChar) {
        valueIndex++;
      }
      maskIndex++;
    }
  }

  // Update input value with the formatted result
  event.target.value = newValue;

  // Adjust cursor position
  const selectionStart = event.target.selectionStart;
  if (selectionStart !== null) {
    const newCursorPos = Math.min(selectionStart, newValue.length);
    requestAnimationFrame(() => {
      event.target.setSelectionRange(newCursorPos, newCursorPos);
    });
  }
};
