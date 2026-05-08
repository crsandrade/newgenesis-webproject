const news = [
  {
    title: "Closed Beta anunciado",
    category: "Atualização",
    date: "08 Maio 2026",
    description:
      "Os primeiros aventureiros serão convocados para explorar o continente de New Genesis.",
  },
  {
    title: "Sistema de Guildas",
    category: "Sistema",
    date: "08 Maio 2026",
    description:
      "Construa alianças, dispute territórios e participe de guerras entre facções.",
  },
  {
    title: "Expansão do Norte",
    category: "Conteúdo",
    date: "08 Maio 2026",
    description:
      "Novas regiões congeladas, criaturas ancestrais e desafios inéditos chegarão em breve.",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Notícias
        </p>

        <h1 className="text-5xl font-black">Últimas atualizações</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Acompanhe novidades, eventos, atualizações e anúncios oficiais de New
          Genesis.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-amber-300/40"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                {item.category}
              </p>

              <h2 className="mt-4 text-2xl font-black">{item.title}</h2>

              <p className="mt-2 text-sm text-zinc-500">{item.date}</p>

              <p className="mt-5 leading-7 text-zinc-400">
                {item.description}
              </p>

              <button className="mt-8 font-bold text-amber-300">
                Ler mais →
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}