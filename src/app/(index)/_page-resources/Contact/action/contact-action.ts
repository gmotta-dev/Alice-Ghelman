"use server";

import { safeExecute } from "@/shared/utils/safe-execute/safe-execute";
import nodemailer from "nodemailer";

import { contactSchema } from "../contactSchema";
import ContactEmailTemplate from "./ContactEmailTemplate";

export const contactAction = safeExecute({
  log: { name: "contactAction", logBody: true },

  schema: contactSchema,

  defaultError: {
    status: "error",
    client: {
      toast: { title: "Erro ao enviar mensagem", description: "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.", stylization: { variant: "error" } },
    },
  },

  fn: async (body) => {
    const { renderToString } = await import("react-dom/server");

    const supportTransporter = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.SUPPORT_EMAIL_USER, pass: process.env.SUPPORT_EMAIL_PASS } });

    const html = renderToString(ContactEmailTemplate({ from: body.email, message: body.message, name: body.name, phone: body.phone }));

    const mail = await supportTransporter.sendMail({
      from: process.env.SUPPORT_EMAIL_USER,
      replyTo: process.env.SUPPORT_EMAIL_USER,
      to: "gpmotta21@gmail.com",
      subject: "Contato",
      html,
    });

    return {
      status: "success",
      data: null,
      client: { toast: { title: "Mensagem enviada com sucesso!", description: "Obrigado por entrar em contato conosco.", stylization: { variant: "success" } } },
    };
  },
});
