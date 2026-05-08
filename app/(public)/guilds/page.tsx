import type { Metadata } from "next";
import { guilds } from "@/data/guilds";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
    title: "Guilds",
    description: "Guilds oficiais de New Genesis",
};

export default function GuildsPage() {
    return (
        <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
            <div className="mx-auto max-w-7xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
                    Guilds
                </p>

                <h1 className="text-5xl font-black">Alianças do continente</h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    As guilds mais influentes de New Genesis disputam território, honra e
                    domínio.
                </p>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {guilds.map((guild) => (
                        <Card key={guild.id}>
                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                                {guild.kingdom}
                            </p>

                            <h2 className="mt-4 text-3xl font-black">{guild.name}</h2>

                            <div className="mt-6 space-y-3 text-zinc-400">
                                <p>Líder: {guild.leader}</p>
                                <p>Membros: {guild.members}</p>
                                <p>Poder: {guild.power}</p>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </main>
    );
}