import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-amber-300/40">
      {children}
    </article>
  );
}