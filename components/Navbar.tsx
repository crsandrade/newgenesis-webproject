import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        <div>
          <h1 className="text-2xl font-black tracking-[0.3em] text-amber-300">
            NEW GENESIS
          </h1>

          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">
            Nordic Roman Fantasy MMORPG
          </p>
        </div>

        <nav className="hidden gap-8 text-sm font-semibold text-zinc-300 md:flex">
          <Link className="transition hover:text-amber-300" href="/">Home</Link>
          <Link className="transition hover:text-amber-300" href="/news">Notícias</Link>
          <Link className="transition hover:text-amber-300" href="/rankings">Rankings</Link>
          <Link className="transition hover:text-amber-300" href="/guilds">Guilds</Link>
          <Link className="transition hover:text-amber-300" href="/faq">FAQ</Link>
          <Link className="transition hover:text-amber-300" href="/classes">Classes</Link>
          <Link className="transition hover:text-amber-300" href="/download">Download</Link>
          <Link className="transition hover:text-amber-300" href="/shop">Loja</Link>
          <Link className="transition hover:text-amber-300" href="/register">Cadastro</Link>
        </nav>

        <button className="rounded-xl bg-amber-400 px-5 py-2 font-bold text-black transition hover:bg-amber-300">
          Jogar Agora
        </button>
      </div>
    </header>
  );
}