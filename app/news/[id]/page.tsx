import { notFound } from "next/navigation";

import { news } from "@/data/news";
import { formatDate } from "@/lib/format-date";

interface NewsDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetailsPage({
  params,
}: NewsDetailsPageProps) {
  const { id } = await params;

  const article = news.find((item) => item.id === id);

  if (!article) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-amber-300">
          {article.category}
        </p>

        <h1 className="text-5xl font-black">{article.title}</h1>

        <p className="mt-4 text-sm text-zinc-500">{formatDate(article.date)}</p>

        <p className="mt-10 text-lg leading-8 text-zinc-300">
          {article.description}
        </p>
      </article>
    </main>
  );
}