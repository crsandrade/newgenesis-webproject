import Link from "next/link";

import { createClient } from "@/lib/supabase/server";

export async function AuthButtons() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="flex items-center gap-4">
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
    );
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  return (
    <div className="flex items-center gap-4">
      {profile?.role === "admin" && (
        <Link
          href="/admin"
          className="text-red-400 transition hover:text-red-300"
        >
          Admin
        </Link>
      )}

      <Link
        href="/account"
        className="transition hover:text-amber-300"
      >
        Minha Conta
      </Link>
    </div>
  );
}