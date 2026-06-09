import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-bg.png')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#09090b]" />


      <Container>
        <div className="relative z-10 grid min-h-screen items-center gap-12 pt-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl xl:max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-amber-300 sm:text-sm sm:tracking-[0.5em]">
              Uma nova era começa
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl xl:text-7xl">
              O seu futuro escrito por você.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:mt-8 md:text-lg md:leading-8">
              Entre em um mundo e monte o seu próprio império,
              enquanto desafia poderes ancetrais, encontre runas e mude
              o destino do continente.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
              <Link href="/register" className="rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-black transition hover:bg-amber-300">
                Criar Conta
              </Link>
              <Link href="/download" className="rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-black transition hover:bg-amber-300">
                Download
              </Link>
            </div>

          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-md">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
                Top 5 jogadores
              </p>

              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((position) => (
                  <div
                    key={position}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-black text-amber-300">
                        #{position}
                      </span>

                      <div>
                        <p className="font-bold">PlayerName</p>
                        <p className="text-xs text-zinc-500">Level 99</p>
                      </div>
                    </div>

                    <span className="text-sm font-bold text-zinc-300">
                      999k
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}