import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";

import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./LogoutButton";

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

    const { data: profile } = await supabase
        .from("profiles")
        .select("username, email, cash, role, kingdom, is_banned, created_at")
        .eq("id", user.id)
        .single();

    return (
        <main className="min-h-screen px-6 py-20 text-white">
            <div className="mx-auto max-w-6xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
                    Minha Conta
                </p>

                <h1 className="text-5xl font-black">
                    Bem-vindo, {profile?.username ?? user.email}
                </h1>

                <p className="mt-6 max-w-2xl text-zinc-400">
                    Gerencie sua conta, acompanhe seu saldo de Cash e veja informações do
                    seu perfil em New Genesis.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                            Cash disponível
                        </p>
                        <h2 className="mt-4 text-4xl font-black">
                            {profile?.cash ?? 0}
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                            Tipo de conta
                        </p>
                        <h2 className="mt-4 text-4xl font-black">
                            {profile?.role ?? "player"}
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                            Reino
                        </p>
                        <h2 className="mt-4 text-4xl font-black">
                            {profile?.kingdom ?? "Não escolhido"}
                        </h2>
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                    <h2 className="text-2xl font-black">Dados da conta</h2>

                    <div className="mt-6 grid gap-4 text-zinc-400 md:grid-cols-2">
                        <p>
                            <strong className="text-zinc-200">Usuário:</strong>{" "}
                            {profile?.username ?? "Não informado"}
                        </p>

                        <p>
                            <strong className="text-zinc-200">E-mail:</strong>{" "}
                            {profile?.email ?? user.email}
                        </p>

                        <p>
                            <strong className="text-zinc-200">Status:</strong>{" "}
                            {profile?.is_banned ? "Banido" : "Ativo"}
                        </p>

                        <p>
                            <strong className="text-zinc-200">Criado em:</strong>{" "}
                            {profile?.created_at
                                ? new Date(profile.created_at).toLocaleDateString("pt-BR")
                                : "Indisponível"}
                        </p>
                        <div className="mt-8">
                            <LogoutButton />
                        </div>
                    </div>
                </div>

                {profile?.role === "admin" && (
                    <div className="mt-8 rounded-3xl border border-red-400/20 bg-red-500/5 p-8">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
                            Administração
                        </p>

                        <h2 className="mt-3 text-2xl font-black">Painel administrativo</h2>

                        <p className="mt-4 text-zinc-400">
                            Acesse as ferramentas de administração do site.
                        </p>

                        <Link
                            href="/admin"
                            className="mt-6 inline-block rounded-xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-400"
                        >
                            Acessar Admin
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}