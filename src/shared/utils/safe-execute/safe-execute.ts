import { TToast } from "@/shared/components/Toast/types";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { z, ZodSchema } from "zod";

type BaseActionResponse = {
  redirectUrl?: string;
  toast?: TToast;
  refresh?: boolean;
};

export type ActionSuccess<T> = { status: "success"; data: NonNullable<T>; client?: BaseActionResponse };
export type ActionError<T> = { status: "error"; message?: string; error?: unknown; fieldErrors?: z.ZodFormattedError<T>; client?: BaseActionResponse };
export type TSafeExecuteResult<T, TSchema = any> = ActionSuccess<T> | ActionError<TSchema>;

type InferFnReturn<T> = T extends (input: any) => Promise<TSafeExecuteResult<infer R, any>> ? R : never;
type InferFnInput<T> = T extends (input: infer I) => any ? I : never;

/**
 * This function is used to execute a function and return a safe execute result

 * The main purpose is to use this function in several places to obtain a safe guard result

 * The idea is to never throw errors or use try catches in the codebase, but there are some cases in which is usefull to throw
 inside the safeExecute, which is the case if you want to use safeExecute inside a prisma transaction for example.
 *
 * @param config - The config object
 * @param config.schema - The schema to validate the input
 * @param config.defaultError - The default error
 * @param config.fn - The function to execute
 * @param config.log - The log object
 */
export const safeExecute = <TFn extends (input: any) => Promise<TSafeExecuteResult<any, any>>, TSchema extends ZodSchema<any> | undefined = undefined>(config: {
  schema?: TSchema;
  defaultError?: TSafeExecuteResult<InferFnReturn<TFn>, TSchema extends ZodSchema<any> ? z.infer<TSchema> : InferFnInput<TFn>>;
  fn: TSchema extends ZodSchema<any> ? (input: z.infer<TSchema>) => ReturnType<TFn> : TFn;
  log?: { name: string; logBody?: boolean };
}) => {
  return async (
    input?: TSchema extends ZodSchema<any> ? z.infer<TSchema> : InferFnInput<TFn>,
  ): Promise<TSafeExecuteResult<InferFnReturn<TFn>, TSchema extends ZodSchema<any> ? z.infer<TSchema> : InferFnInput<TFn>>> => {
    try {
      console.log(`${config.log?.name + " Safe Execute"}`);

      if (config.log?.logBody) console.log("Safe Execute Body", input);

      const validatedData = config.schema?.safeParse(input);
      if (validatedData && !validatedData.success) {
        console.error("Action Validation Error", validatedData.error);
        return {
          status: "error",
          fieldErrors: validatedData.error.format() as z.ZodFormattedError<TSchema extends ZodSchema<any> ? z.infer<TSchema> : InferFnInput<TFn>>,
        };
      }

      const data = await config.fn(validatedData?.data ?? input);

      if (data.status === "success") {
        console.log("Safe Execute Success!", data);
      } else {
        console.log("Safe Execute Error!", data);
      }

      return data;
    } catch (error) {
      if (isRedirectError(error)) throw error;

      console.log("Safe Execute Catch Error!", error);

      return config.defaultError ?? { status: "error", message: "Erro ao executar ação", error };
    }
  };
};
