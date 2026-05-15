"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FormInput } from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { createClient } from "@/lib/supabase/client";

function createSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function CreateNewsForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!title || !category || !description) {
      setError("Preencha título, categoria e descrição.");
      return;
    }

    const supabase = createClient();

    const { error } = await supabase.from("news").insert({
      title,
      slug: createSlug(title),
      category,
      description,
      content,
      is_published: true,
    });

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin/news");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <FormInput
        label="Título"
        type="text"
        name="title"
        placeholder="Ex: Novo sistema de guildas"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <FormInput
        label="Categoria"
        type="text"
        name="category"
        placeholder="Ex: Atualização"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      <FormInput
        label="Descrição curta"
        type="text"
        name="description"
        placeholder="Resumo da notícia"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <div>
        <label
          htmlFor="content"
          className="mb-2 block text-sm font-semibold text-zinc-300"
        >
          Conteúdo
        </label>

        <textarea
          id="content"
          name="content"
          rows={8}
          placeholder="Conteúdo completo da notícia"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-300"
        />
      </div>

      <SubmitButton>Criar notícia</SubmitButton>

      {error && <p className="text-sm font-semibold text-red-400">{error}</p>}
    </form>
  );
}