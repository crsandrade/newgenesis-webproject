export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          Cadastro
        </p>

        <h1 className="text-4xl font-black">
          Crie sua conta
        </h1>

        <form className="mt-10 space-y-5">
          
          <input
            type="text"
            placeholder="Usuário"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-300"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-300"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-300"
          />

          <button className="w-full rounded-xl bg-amber-400 py-4 font-black text-black transition hover:bg-amber-300">
            Criar Conta
          </button>
        </form>
      </div>
    </main>
  );
}