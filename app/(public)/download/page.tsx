import type { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Download | New Genesis",
  description: "Download oficial do launcher New Genesis"
}

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-5xl">
        
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Download
        </p>

        <h1 className="text-5xl font-black">
          Prepare-se para entrar em New Genesis
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Faça o download do launcher oficial e comece sua jornada no continente.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <h2 className="text-2xl font-black">
            Launcher Windows
          </h2>

          <p className="mt-4 text-zinc-400">
            Versão mais recente do cliente oficial.
          </p>

          <button className="mt-8 rounded-2xl bg-amber-400 px-8 py-4 font-black text-black transition hover:bg-amber-300">
            Download Launcher
          </button>
        </div>
      </div>
    </main>
  );
}