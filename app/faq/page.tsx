const faq = [
  {
    question: "New Genesis será gratuito?",
    answer:
      "Sim. O jogo será free-to-play com conteúdos opcionais.",
  },
  {
    question: "Quais plataformas serão suportadas?",
    answer:
      "O jogo é disponibilizado apenas para computador.",
  },
  {
    question: "O jogo terá PvP?",
    answer:
      "Sim. O jogo possui zonas de PvP e eventos onde o PvP será estimulado.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">
        
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          FAQ
        </p>

        <h1 className="text-5xl font-black">
          Perguntas frequentes
        </h1>

        <div className="mt-14 space-y-6">
          {faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h2 className="text-2xl font-black">
                {item.question}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}