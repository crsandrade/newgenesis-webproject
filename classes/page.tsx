const classes = [
  {
    name: "TransKnight",
    role: "Tanque / Corpo a corpo",
    difficulty: "Difícil",
    description:
      "Um combatente disciplinado, que jurou proteger os mais fracos.",
  },
  {
    name: "BeastMaster",
    role: "Tanque / Utilidade",
    difficulty: "Fácil",
    description:
      "Guerreiro da natureza, pode evocar espíritos para ajuda-lo.",
  },
  {
    name: "Foema",
    role: "Suporte / Magia",
    difficulty: "Fácil",
    description:
      "Estudante das artes divinas da magia.",
  },
   {
    name: "Huntress",
    role: "Ataque Explosivo / Distância",
    difficulty: "Médio",
    description:
      "Perseguidora esguia com alta capacidade de sobrevivência.",
  },
];

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Classes
        </p>

        <h1 className="text-5xl font-black">Escolha seu caminho</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Cada classe possui estilo próprio, função em grupo e curva de aprendizado.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {classes.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-amber-300/40"
            >
              <div className="mb-6 h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/20 to-black" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                {item.role}
              </p>

              <h2 className="mt-4 text-2xl font-black">{item.name}</h2>

              <p className="mt-2 text-sm text-zinc-500">
                Dificuldade: {item.difficulty}
              </p>

              <p className="mt-5 leading-7 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}