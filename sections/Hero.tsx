export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#09090b]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.5em] text-amber-300">
          Uma nova era começa
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          O seu futuro escrito por você.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Entre em um mundo onde guerreiros nórdicos enfrentam impérios
          ancestrais, runas despertam poderes esquecidos e cada escolha define
          o destino do continente.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-amber-400 px-8 py-4 font-black uppercase tracking-wider text-black transition hover:scale-105 hover:bg-amber-300">
            Criar Conta
          </button>

          <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-black uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/10">
            Download
          </button>
        </div>
      </div>
    </section>
  );
}