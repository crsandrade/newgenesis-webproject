import type { Metadata } from "next";
import { FormInput } from "@/components/FormInput";
import { PrimaryButton } from "@/components/PrimaryButton";

export const metadata: Metadata = { 
  title: "Registro | New Genesis",
  description: "Cadastre-se e comece a escrever o seu futuro."
}

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Cadastro
        </p>

        <h1 className="text-4xl font-black">
          Crie sua conta
        </h1>

        <form className="mt-10 space-y-5">
          
          <FormInput
            type="text"
            name="user"
            placeholder="Usuário"
          />

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
            Criar Conta
          </PrimaryButton>
        </form>
      </div>
    </main>
  );
}