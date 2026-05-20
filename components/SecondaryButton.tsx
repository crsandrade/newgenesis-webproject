import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
}

export function SecondaryButton({
  children,
}: SecondaryButtonProps) {
  return (
    <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-black uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/10 cursor-pointer">
      {children}
    </button>
  );
}