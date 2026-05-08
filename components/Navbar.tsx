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
          <Link href="#">Home</Link>
          <Link href="#">Notícias</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Classes</Link>
          <Link href="#">Download</Link>
          <Link href="#">Loja</Link>
          <Link href="#">Cadastro</Link>
        </nav>

        <button className="rounded-xl bg-amber-400 px-5 py-2 font-bold text-black transition hover:bg-amber-300">
          Jogar Agora
        </button>
      </div>
    </header>
  );
}