import { notFound } from "next/navigation";

import { guilds } from "@/data/guilds";

interface GuildDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function GuildDetailsPage({
  params,
}: GuildDetailsPageProps) {
  const { id } = await params;

  const guild = guilds.find((item) => item.id === id);

  if (!guild) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          {guild.kingdom}
        </p>

        <h1 className="text-5xl font-black">{guild.name}</h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          {guild.description}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-zinc-500">Líder</p>
            <p className="mt-2 text-2xl font-black text-amber-300">
              {guild.leader}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-zinc-500">Membros</p>
            <p className="mt-2 text-2xl font-black">{guild.members}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-zinc-500">Poder</p>
            <p className="mt-2 text-2xl font-black">{guild.power}</p>
          </div>
        </div>
      </article>
    </main>
  );
}