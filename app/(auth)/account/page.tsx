import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Minha Conta",
};

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Conta
        </p>

        <h1 className="text-4xl font-black">Bem-vindo ao painel</h1>

        <p className="mt-6 leading-7 text-zinc-400">
          Usuário logado: {user.email}
        </p>
      </div>
    </main>
  );
}