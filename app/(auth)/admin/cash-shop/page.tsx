import type { Metadata } from "next";

import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Cash Shop",
  description: "Compre Cash para New Genesis",
};

export default async function CashShopPage() {
  const supabase = await createClient();

  const { data: packages } = await supabase
    .from("cash_packages")
    .select("*")
    .eq("is_active", true)
    .order("price_brl", { ascending: true });

  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Cash Shop
        </p>

        <h1 className="text-5xl font-black">
          Loja de Cash
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400">
          Adquira Cash e itens especiais para fortalecer sua jornada em New Genesis.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages?.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                {item.cash_amount} Cash
              </p>

              <h2 className="mt-4 text-3xl font-black">
                R$ {Number(item.price_brl).toFixed(2).replace(".", ",")}
              </h2>

              {item.bonus_description && (
                <p className="mt-5 leading-7 text-zinc-400">
                  {item.bonus_description}
                </p>
              )}

              <button className="mt-8 w-full rounded-xl bg-amber-400 px-5 py-3 font-bold text-black transition hover:bg-amber-300">
                Comprar
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}