"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigationLinks } from "@/constants/navigation";
import { NavLink } from "@/components/NavLink";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/">
          <div>
            <h1 className="text-xl font-black tracking-[0.25em] text-amber-300 md:text-2xl md:tracking-[0.3em]">
              NEW GENESIS
            </h1>

            <p className="hidden text-[10px] uppercase tracking-[0.4em] text-zinc-400 sm:block">
              Nordic Roman Fantasy MMORPG
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-300 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="transition hover:text-amber-300"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-black transition hover:bg-amber-300"
          >
            Jogue Agora
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5 text-sm font-semibold text-zinc-300">
            {navigationLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            <div className="flex flex-col gap-4 border-t border-white/10 pt-5">
              <Link
                href="/login"
                className="transition hover:text-amber-300"
              >
                Login
              </Link>

              <Link
                href="/register"
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