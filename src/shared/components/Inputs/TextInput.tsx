import { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

export default function TextInput({ error, ...props }: ComponentProps<"input"> & { error?: string; classNames?: Partial<Record<"container" | "input" | "error", string>> }) {
  return (
    <div className={twMerge("flex flex-col gap-2", props.classNames?.container, props.className)}>
      <input
        type="text"
        {...props}
        className={twMerge("h-10 rounded-md border border-nandor-200 bg-nandor-100 px-4 text-nandor-600 placeholder:text-nandor-600", props.classNames?.input)}
      />
      {error && <p className={twMerge("text-red-500", props.classNames?.error)}>{error}</p>}
    </div>
  );
}
