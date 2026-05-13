import Link from "next/link";

import { Container } from "@/components/Container";
import { navigationLinks } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-black tracking-[0.3em] text-amber-300">
              NEW GENESIS
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Onde a nostalgia se encontra
              com a modernidade.
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-zinc-400">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-amber-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-zinc-600">
          © 2026 New Genesis. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}