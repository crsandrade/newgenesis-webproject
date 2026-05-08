"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={`transition ${
        isActive
          ? "text-amber-300"
          : "text-zinc-300 hover:text-amber-300"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}