"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { FormInput } from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Preencha todos os campos.");
            return;
        }

        console.log({
            email,
            password,
        });

        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError("E-mail ou senha inválidos.");
            return;
        }

        setError("");
        router.push("/account");
    }

    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
                    Login
                </p>

                <h1 className="text-4xl font-black">Acesse sua conta</h1>

                <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                    <FormInput
                        label="E-mail"
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <FormInput
                        label="Senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <SubmitButton>Entrar</SubmitButton>
                </form>

                {error && (
                    <p className="mt-4 text-sm font-semibold text-red-400">
                        {error}
                    </p>
                )}

                <p className="mt-6 text-center text-sm text-zinc-400">
                    Ainda não tem conta?{" "}
                    <Link className="font-bold text-amber-300" href="/register">
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </main>
    );
}