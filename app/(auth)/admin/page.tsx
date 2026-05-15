import type { Metadata } from "next";
import Link from "next/link";

import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Gerenciar Notícias",
};

export default async function AdminNewsPage() {
  const supabase = await createClient();

  const { data: news } = await supabase
    .from("news")
    .select("id, title, category, slug, is_published, created_at")
    .order("created_at", { ascending: false });

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

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
          {news && news.length > 0 ? (
            <div className="divide-y divide-white/10">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                      {item.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-black">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm text-zinc-500">
                      /news/{item.slug}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
                    {item.is_published ? "Publicado" : "Rascunho"}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/[0.03] p-8 text-zinc-400">
              Nenhuma notícia cadastrada ainda.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}