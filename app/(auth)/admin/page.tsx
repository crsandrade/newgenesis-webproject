import type { Metadata } from "next";
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

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, username")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    redirect("/account");
  }

  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-red-400">
          Admin Panel
        </p>

        <h1 className="text-5xl font-black">
          Bem-vindo, {profile.username}
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400">
          Área administrativa do New Genesis.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Usuários
            </h2>

            <p className="mt-4 text-zinc-400">
              Gerenciar contas do jogo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Cash Shop
            </h2>

            <p className="mt-4 text-zinc-400">
              Gerenciar compras e pedidos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Servidor
            </h2>

            <p className="mt-4 text-zinc-400">
              Status e monitoramento.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}