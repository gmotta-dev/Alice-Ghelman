import { twMerge } from "tailwind-merge";

export default function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={twMerge("text-5xl font-bold text-nandor-900 md:text-6xl", className)}>{children}</h2>;
}
