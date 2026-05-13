"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigationLinks } from "@/constants/navigation";
import { NavLink } from "@/components/NavLink";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" onClick={() => setIsOpen(false)} className="shrink-0">
          <h1 className="text-lg font-black tracking-[0.18em] text-amber-300 sm:text-xl md:text-2xl md:tracking-[0.3em]">
            NEW GENESIS
          </h1>

         
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 text-xs font-semibold text-zinc-300 xl:flex xl:gap-6 xl:text-sm">
          {navigationLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-black transition hover:bg-amber-300">
          <Link href="/login" className="text-sm transition hover:text-amber-300">
            Jogue Agora
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-white xl:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-black/95 px-4 py-6 xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-5 text-sm font-semibold text-zinc-300">
            {navigationLinks.map((link) => (
              <div key={link.href} onClick={() => setIsOpen(false)}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </div>
            ))}

            <div className="flex flex-col gap-4 border-t border-white/10 pt-5">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                 className="rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-black transition hover:bg-amber-300"
              >
                Jogue Agora
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}