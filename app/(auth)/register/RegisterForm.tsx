"use client";

import { useState } from "react";

import { FormInput } from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { registerUser } from "@/actions/register";
import { createClient } from "@/lib/supabase/client";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!username || !email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    const response = await registerUser({
      username,
      email,
      password,
    });

    console.log(response);

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    setError("");
    alert("Cadastro realizado! Verifique seu e-mail para confirmar a conta.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Cadastro
        </p>

        <h1 className="text-4xl font-black">
          Crie sua conta
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <FormInput
            label="Usuário"
            type="text"
            name="username"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />

          <FormInput
            label="E-mail"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />

          <FormInput
            label="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />

          <SubmitButton>
            Criar Conta
          </SubmitButton>
        </form>

        {error && (
          <p className="mt-4 text-sm font-semibold text-red-400">
            {error}
          </p>
        )}


      </div>
    </main>
  );
}