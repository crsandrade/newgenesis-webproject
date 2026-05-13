import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-bg.png')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#09090b]" />

      <Container>
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="max-w-2xl xl:max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-amber-300 sm:text-sm sm:tracking-[0.5em]">
              Uma nova era começa
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl xl:text-7xl">
              O seu futuro escrito por você.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:mt-8 md:text-lg md:leading-8">
              Entre em um mundo onde guerreiros nórdicos enfrentam impérios
              ancestrais, runas despertam poderes esquecidos e cada escolha
              define o destino do continente.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
              <PrimaryButton>Criar Conta</PrimaryButton>
              <SecondaryButton>Download</SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}