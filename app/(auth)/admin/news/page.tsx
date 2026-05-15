import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gerenciar Notícias",
};

export default function AdminNewsPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-red-400">
              Admin
            </p>

            <h1 className="text-5xl font-black">Gerenciar Notícias</h1>
          </div>

          <Link
            href="/admin/news/create"
            className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-black transition hover:bg-amber-300"
          >
            Nova notícia
          </Link>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-zinc-400">
            Em breve, as notícias cadastradas aparecerão aqui.
          </p>
        </div>
      </div>
    </main>
  );
}