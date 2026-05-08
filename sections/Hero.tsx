import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";


export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-bg.png')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#09090b]" />

      <Container>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.5em] text-amber-300">
          Uma nova era começa
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          O seu futuro escrito por você.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Entre em um mundo onde guerreiros nórdicos enfrentam impérios
          ancestrais, runas despertam poderes esquecidos e cada escolha define
          o destino do continente.
        </p>

        <div className="mt-10 flex gap-4">
          <PrimaryButton>
            Criar Conta
          </PrimaryButton>

          <SecondaryButton>
            Download
          </SecondaryButton>
        </div>
      </div>
      </Container>
    </section>
  );
}