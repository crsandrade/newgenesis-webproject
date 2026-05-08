const products = [
  {
    name: "Pacote Fundador",
    type: "Conta",
    price: "R$ 49,90",
    description:
      "Inclui título exclusivo, moldura de personagem e acesso antecipado ao beta.",
  },
  {
    name: "Montaria Lobo Ancestral",
    type: "Cosmético",
    price: "R$ 29,90",
    description:
      "Uma montaria nórdica rara para atravessar o continente com estilo.",
  },
  {
    name: "Armadura Imperial Dourada",
    type: "Skin",
    price: "R$ 24,90",
    description:
      "Visual cosmético inspirado nas legiões imperiais de New Genesis.",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Loja
        </p>

        <h1 className="text-5xl font-black">Itens exclusivos</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Adquira cosméticos, pacotes especiais e itens visuais para personalizar
          sua jornada.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-amber-300/40"
            >
              <div className="mb-6 h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/20 to-black" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                {item.type}
              </p>

              <h2 className="mt-4 text-2xl font-black">{item.name}</h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-xl font-black text-amber-300">
                  {item.price}
                </span>

                <button className="rounded-xl bg-amber-400 px-5 py-3 font-black text-black transition hover:bg-amber-300">
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}