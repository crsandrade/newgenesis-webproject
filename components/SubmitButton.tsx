interface SubmitButtonProps {
  children: React.ReactNode;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full rounded-xl bg-amber-400 py-4 font-black text-black transition hover:bg-amber-300"
    >
      {children}
    </button>
  );
}