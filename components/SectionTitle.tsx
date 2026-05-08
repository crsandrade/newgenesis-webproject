interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black md:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 text-zinc-400 ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}