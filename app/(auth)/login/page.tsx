import Link from "next/link";
import { FormInput } from "@/components/FormInput";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Login
        </p>

        <h1 className="text-4xl font-black">Acesse sua conta</h1>

        <form className="mt-10 space-y-5">
          <FormInput
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <FormInput
            type="password"
            name="password"
            placeholder="Senha"
          />

          <PrimaryButton>
            Entrar
          </PrimaryButton>
        </form>

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