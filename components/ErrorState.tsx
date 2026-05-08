interface ErrorStateProps {
  title: string;
  description: string;
}

export function ErrorState({ title, description }: ErrorStateProps) {
  return (
    <div className="rounded-3xl border border-red-400/20 bg-red-500/5 p-10 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.4em] text-red-400">
        Error
      </p>

      <h2 className="mt-4 text-3xl font-black">{title}</h2>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}