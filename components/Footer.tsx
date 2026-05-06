export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-[0.3em] text-amber-300">
            NEW GENESIS
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
            MMORPG fantasy inspirado em mitologia nórdica, impérios antigos e
            escolhas que moldam o destino do jogador.
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm font-semibold text-zinc-400">
          <a className="transition hover:text-amber-300" href="#">
            Home
          </a>
          <a className="transition hover:text-amber-300" href="#">
            Notícias
          </a>
          <a className="transition hover:text-amber-300" href="#">
            FAQ
          </a>
          <a className="transition hover:text-amber-300" href="#classes">
            Classes
          </a>
          <a className="transition hover:text-amber-300" href="#">
            Download
          </a>
          <a className="transition hover:text-amber-300" href="#">
            Loja
          </a>
          <a className="transition hover:text-amber-300" href="#">
            Cadastro
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-zinc-600">
        © 2026 New Genesis. Todos os direitos reservados.
      </div>
    </footer>
  );
}