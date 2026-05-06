const features = [
  {
    title: "Impérios em Guerra",
    description:
      "A ordem romana encontra a brutalidade nórdica em um continente dividido por honra, conquista e poder.",
  },
  {
    title: "Runas Ancestrais",
    description:
      "Magias esquecidas despertam novamente, permitindo que heróis moldem batalhas e destinos.",
  },
  {
    title: "Seu Caminho",
    description:
      "Escolha sua classe, construa sua história e escreva seu nome entre as lendas de New Genesis.",
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