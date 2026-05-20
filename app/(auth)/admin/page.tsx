import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, username")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") redirect("/account");

  const cards = [
    {
      title: "Notícias",
      description: "Criar, listar e gerenciar notícias do site.",
      href: "/admin/news",
      action: "Gerenciar notícias",
    },
    {
      title: "Cash Shop",
      description: "Manipular loja de Cash, valores, quantidades...",
      href: "/admin/",
      action: "Nova notícia",
    },
    {
      title: "Usuários",
      description: "Gerenciar contas, cargos, banimentos e perfis.",
      href: "/admin/users",
      action: "Gerenciar usuários",
    },
    {
      title: "Registro de Compras",
      description: "Visualizar pedidos de cash.",
      href: "/admin/cash-shop",
      action: "Gerenciar cash",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-20 text-white">

      <div className="mx-auto max-w-7xl">
        <div className="flex">
          <div className="flex flex-col">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-red-400">
              Admin Panel
            </p>

            <h1 className="text-5xl font-black">
              Bem-vindo, {profile.username}
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-400">
              Gerencie o conteúdo, usuários e sistemas principais do New Genesis.
            </p>


          </div>

          <div className="ml-auto">

            <Link
              href="/account"
              className="rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-black transition hover:bg-amber-300"
            >
              Voltar
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.06]"
            >
              <h2 className="text-2xl font-black">{card.title}</h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {card.description}
              </p>

              <span className="mt-8 inline-block font-bold text-amber-300">
                {card.action} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}