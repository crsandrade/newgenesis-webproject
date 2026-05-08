import type { Metadata } from "next";
import { Card } from "@/components/Card";
import Image from "next/image";
import { classes } from "@/data/classes";

export const metadata: Metadata = {
  title: "Classes | New Genesis",
  description: "Descubra a melhor classe pro seu estilo de jogo no New Genesis."
}

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Classes
        </p>

        <h1 className="text-5xl font-black">Escolha seu caminho</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Cada classe possui estilo próprio, função em grupo e curva de aprendizado.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {classes.map((item) => (
            <Card key={item.name}>
              <p className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-amber-300/40"
              > </p>
              <div className="relative mb-6 h-48 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                {item.role}
              </p>

              <h2 className="mt-4 text-2xl font-black">{item.name}</h2>

              <p className="mt-2 text-sm text-zinc-500">
                Dificuldade: {item.difficulty}
              </p>

              <p className="mt-5 leading-7 text-zinc-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}