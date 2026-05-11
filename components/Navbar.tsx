import { navigationLinks } from "@/constants/navigation";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { AuthButtons } from "@/components/AuthButtons";

export function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <div>
          <h1 className="text-2xl font-black tracking-[0.3em] text-amber-300">
            NEW GENESIS
          </h1>

          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">
            Nordic Roman Fantasy MMORPG
          </p>
        </div>

        {navigationLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
          >
            {link.label}
          </NavLink>
        ))}

        <AuthButtons />
      </div>
    </header>
  );
}