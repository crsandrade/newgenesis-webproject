const classes = [
  {
    name: "TransKnight",
    role: "Tanque / Corpo a corpo",
    description:
      "Um combatente disciplinado, que jurou proteger os mais fracos.",
  },
  {
    name: "BeastMaster",
    role: "Tanque / Utilidade",
    description:
      "Guerreiro da natureza, pode evocar espíritos para ajuda-lo.",
  },
  {
    name: "Foema",
    role: "Suporte / Magia",
    description:
      "Estudante das artes divinas da magia.",
  },
   {
    name: "Huntress",
    role: "Ataque Explosivo / Distância",
    description:
      "Perseguidora esguia com alta capacidade de sobrevivência.",
  },
];

export function ClassesSection() {
  return (
    <section id="classes" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
            Escolha sua lenda
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Classes iniciais
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Cada classe representa um caminho diferente dentro de New Genesis.
            Domine sua função, evolua suas habilidades e construa sua reputação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {classes.map((item) => (
            <article
              key={item.name}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 transition hover:-translate-y-2 hover:border-amber-300/50"
            >
              <div className="mb-6 h-40 rounded-2xl border border-white/10 bg-black/40" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                {item.role}
              </p>

              <h3 className="mt-3 text-2xl font-black">{item.name}</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.description}
              </p>

              <button className="mt-8 font-bold text-amber-300 transition group-hover:text-amber-200">
                Ver detalhes →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}