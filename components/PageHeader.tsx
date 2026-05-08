interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
        {eyebrow}
      </p>

      <h1 className="text-5xl font-black">{title}</h1>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}