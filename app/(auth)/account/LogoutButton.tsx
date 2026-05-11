"use client";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl border border-red-400/30 bg-red-500/10 px-5 py-3 font-bold text-red-300 transition hover:bg-red-500/20"
    >
      Sair da conta
    </button>
  );
}