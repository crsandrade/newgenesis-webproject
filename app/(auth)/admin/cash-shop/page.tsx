import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Admin Cash Shop",
};

export default async function AdminCashShopPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") redirect("/account");

  const { data: packages } = await supabase
    .from("cash_packages")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-red-400">
              Admin
            </p>

            <h1 className="text-5xl font-black">Cash Shop</h1>

            <p className="mt-6 max-w-2xl text-zinc-400">
              Gerencie pacotes de cash, valores e códigos de entrega para o DBSRV.
            </p>
          </div>

          <Link
            href="/admin/cash-shop/create"
            className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-black transition hover:bg-amber-300"
          >
            Novo pacote
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages && packages.length > 0 ? (
            packages.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                  {item.is_active ? "Ativo" : "Inativo"}
                </p>

                <h2 className="mt-4 text-2xl font-black">{item.title}</h2>

                <div className="mt-6 space-y-2 text-zinc-400">
                  <p>Preço: R$ {Number(item.price_brl).toFixed(2).replace(".", ",")}</p>
                  <p>Cash: {item.cash_amount}</p>
                  <p>Item TXT: {item.item_name}</p>
                  <p>Código: {item.item_code}</p>
                </div>

                {item.bonus_description && (
                  <p className="mt-5 text-sm leading-6 text-zinc-500">
                    {item.bonus_description}
                  </p>
                )}
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-zinc-400">
              Nenhum pacote cadastrado ainda.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}