interface FormInputProps {
  type: string;
  placeholder: string;
  name: string;
}

export function FormInput({ type, placeholder, name }: FormInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-300"
    />
  );
}