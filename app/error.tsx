"use client";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  console.error(error);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-red-400">
          Unexpected Error
        </p>

        <h1 className="text-5xl font-black">
          Something went wrong
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          An unexpected error occurred while loading this part of New Genesis.
        </p>

        <button
          onClick={reset}
          className="mt-10 rounded-2xl bg-amber-400 px-8 py-4 font-black uppercase tracking-wider text-black transition hover:bg-amber-300"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}