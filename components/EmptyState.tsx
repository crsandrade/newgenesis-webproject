interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
        Empty
      </p>

      <h2 className="mt-4 text-3xl font-black">{title}</h2>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}