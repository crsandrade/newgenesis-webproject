import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/news";
import { formatDate } from "@/lib/format-date";
import { Card } from "@/components/Card";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Notícias | New Genesis",
  description: "Notícias New Genesis - Saiba sobre tudo que acontece no jogo."
}


export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Notícias
        </p>

        <h1 className="text-5xl font-black">Últimas atualizações</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Acompanhe novidades, eventos, atualizações e anúncios oficiais de New
          Genesis.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <Card key={item.title}>
              <p className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-amber-300/40" >
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                {item.category}
              </p>

              <h2 className="mt-4 text-2xl font-black">{item.title}</h2>

              <p className="mt-2 text-sm text-zinc-500">{formatDate(item.date)}</p>

              <p className="mt-5 leading-7 text-zinc-400">
                {item.description}
              </p>

              <Link
                className="mt-8 inline-block font-bold text-amber-300"
                href={`/news/${item.id}`}
              >
                Ler mais →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}