import { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

export default function TextArea({
  error,
  classNames,
  ...props
}: ComponentProps<"textarea"> & { error?: string; classNames?: Partial<Record<"container" | "input" | "error", string>> }) {
  return (
    <div className={twMerge("flex flex-col gap-2", classNames?.container, props.className)}>
      <textarea
        {...props}
        className={twMerge("h-24 w-full resize-none rounded-md border border-nandor-200 bg-nandor-100 px-4 py-2 text-nandor-600 placeholder:text-nandor-600", classNames?.input)}
      />
      {error && <p className={twMerge("text-sm text-red-500", classNames?.error)}>{error}</p>}
    </div>
  );
}
