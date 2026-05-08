export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-amber-300" />

        <p className="text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Carregando
        </p>

        <h1 className="mt-4 text-3xl font-black">
          New Genesis
        </h1>
      </div>
    </main>
  );
}