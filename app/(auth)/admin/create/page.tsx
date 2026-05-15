import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar Notícia",
};

export default function CreateNewsPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-red-400">
          Admin
        </p>

        <h1 className="text-5xl font-black">Criar notícia</h1>

        <p className="mt-6 text-zinc-400">
          Em breve algo será criado aqui
        </p>
      </div>
    </main>
  );
}