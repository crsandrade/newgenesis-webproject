import type { Metadata } from "next";

import { rankings } from "@/data/rankings";

export const metadata: Metadata = {
  title: "Rankings",
  description: "Ranking oficial de jogadores de New Genesis",
};

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-6xl">
        
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Rankings
        </p>

        <h1 className="text-5xl font-black">
          Heróis do continente
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Os jogadores mais poderosos de New Genesis.
        </p>

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