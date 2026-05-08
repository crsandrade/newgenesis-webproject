import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { rankings } from "@/data/rankings";

export const metadata: Metadata = {
    title: "Rankings",
    description: "Ranking oficial de jogadores de New Genesis",
};

export default function RankingsPage() {
    return (
        <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
            <div className="mx-auto max-w-6xl">

                <PageHeader
                    eyebrow="Rankings"
                    title="Heróis do continente"
                    description="Os jogadores mais poderosos de New Genesis."
                />

                <div className="mt-14 overflow-hidden rounded-3xl border border-white/10">
                    <table className="w-full">
                        <thead className="bg-white/[0.03] text-left">
                            <tr>
                                <th className="px-6 py-5">#</th>
                                <th className="px-6 py-5">Jogador</th>
                                <th className="px-6 py-5">Classe</th>
                                <th className="px-6 py-5">Level</th>
                                <th className="px-6 py-5">Guild</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rankings.map((player) => (
                                <tr
                                    key={player.position}
                                    className="border-t border-white/10"
                                >
                                    <td className="px-6 py-5 font-black text-amber-300">
                                        {player.position}
                                    </td>

                                    <td className="px-6 py-5">
                                        {player.player}
                                    </td>

                                    <td className="px-6 py-5 text-zinc-400">
                                        {player.class}
                                    </td>

                                    <td className="px-6 py-5">
                                        {player.level}
                                    </td>

                                    <td className="px-6 py-5 text-zinc-400">
                                        {player.guild}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}