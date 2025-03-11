import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({ required_error: "Nome é obrigatório" }).min(1, { message: "Nome é obrigatório" }).max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string({ required_error: "Email é obrigatório" }).email({ message: "Email inválido" }).max(100, { message: "Email deve ter menos de 100 caracteres" }),
  phone: z.string({ required_error: "Telefone é obrigatório" }).min(1, { message: "Telefone é obrigatório" }).max(15, { message: "Telefone deve ter menos de 15 caracteres" }),
  message: z.string({ required_error: "Mensagem é obrigatória" }).min(1, { message: "Mensagem é obrigatória" }).max(500, { message: "Mensagem deve ter menos de 500 caracteres" }),
});
