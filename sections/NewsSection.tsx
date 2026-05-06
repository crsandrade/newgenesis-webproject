const news = [
  {
    title: "Closed Beta anunciado",
    category: "Atualização",
    description:
      "Os primeiros aventureiros serão convocados para explorar o continente de New Genesis.",
  },
  {
    title: "Sistema de Guildas",
    category: "Sistema",
    description:
      "Construa alianças, dispute territórios e participe de guerras entre facções.",
  },
  {
    title: "Expansão do Norte",
    category: "Conteúdo",
    description:
      "Novas regiões congeladas, criaturas ancestrais e desafios inéditos chegarão em breve.",
  },
];

export function NewsSection() {
  return (
    <section className="bg-[#070709] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
              Últimas notícias
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              O mundo está evoluindo
            </h2>
          </div>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-amber-300/40 hover:bg-white/10">
            Ver todas
          </button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-2 hover:border-amber-300/40"
            >
              <div className="h-56 bg-gradient-to-br from-amber-400/20 to-black" />

              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                  {item.category}
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.description}
                </p>

                <button className="mt-8 font-bold text-amber-300">
                  Ler mais →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}