const features = [
  {
    title: "Guerra entre Reinos",
    description:
      "O balanço entre os reinos está afetado, as batalhas pela dominação de Kersef exigem coragem, mas somente um será o vencedor.",
  },
  {
    title: "Guerras de Torre",
    description:
      "O direito de declarar guerra é destinado somente aos maiores guerreiros.",
  },
  {
    title: "Guerra de Castelo",
    description:
      "A dominação absoluta envolve mais do que fazer um cerco perfeito, exige a captura do coração de Kersef.",
  },
];

export function WorldIntro() {
  return (
    <section className="bg-[#09090b] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
            O mundo de New Genesis
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Uma terra forjada por sangue, fé e conquista.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Entre muralhas imperiais, templos antigos e terras congeladas, cada
            jogador carrega uma escolha: servir a um império, desafiar os deuses
            ou criar uma nova ordem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.06]"
            >
              <h3 className="text-2xl font-black text-amber-200">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}