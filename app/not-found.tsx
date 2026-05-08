import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          404
        </p>

        <h1 className="text-5xl font-black">
          Página não encontrada
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          O caminho que você tentou acessar não existe ou foi perdido nas ruínas
          de New Genesis.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-2xl bg-amber-400 px-8 py-4 font-black uppercase tracking-wider text-black transition hover:bg-amber-300"
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}