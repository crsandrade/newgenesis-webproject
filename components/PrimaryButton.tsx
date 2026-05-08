import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
}

export function PrimaryButton({
  children,
}: PrimaryButtonProps) {
  return (
    <button className="rounded-2xl bg-amber-400 px-8 py-4 font-black uppercase tracking-wider text-black transition hover:scale-105 hover:bg-amber-300">
      {children}
    </button>
  );
}