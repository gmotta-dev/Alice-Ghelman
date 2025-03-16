import { use } from "react";

import { TSafeExecuteResult } from "@/shared/utils/safe-execute/safe-execute";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

import { toastCTX } from "../context/ToastCTX";

export function useSafeExecute() {
  const toastStates = use(toastCTX);
  const router = useRouter();

  const processResponse = (response: TSafeExecuteResult<any, any>) => {
    if (response.client) {
      // Handle toast notifications
      if (response.client.toast) toastStates.addToast(response.client.toast);

      // Handle redirects
      if (response.client.redirectUrl) router.push(response.client.redirectUrl);

      // Handle page refresh
      if (response.client.refresh) router.refresh();
    }
  };

  // Type-safe implementation that works with React Hook Form
  const execute = async <
    TFn extends (input: any) => Promise<TSafeExecuteResult<any, any>>,
    TParams = Parameters<TFn>[0],
    TResponse extends TSafeExecuteResult<any, any> = Awaited<ReturnType<TFn>>,
  >(
    action: TFn,
    params: TParams | FieldValues,
  ) => {
    try {
      // Execute the action with the provided parameters
      const responseOrPromise = action(params as TParams) as Promise<TResponse>;

      // Resolve the response if it's a promise
      const response = await Promise.resolve(responseOrPromise);

      processResponse(response);

      return response;
    } catch (error) {
      console.error("Error in useSafeExecuteV2", error);
      const isExecuteError = error instanceof Error && error.message.includes('"status":');

      if (isExecuteError) {
        const parsedError = JSON.parse(error.message);
        processResponse(parsedError);
      } else return { status: "error", client: { toast: { title: "Erro ao executar ação", description: "Erro desconhecido", stylization: { variant: "error" } } } } as TResponse;
    }
  };

  return { execute };
}
