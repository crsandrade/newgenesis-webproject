interface FormInputProps {
    type: string;
    placeholder: string;
    name: string;
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({
    type,
    placeholder,
    name,
    label,
    value,
    onChange,
}: FormInputProps) {
    return (
        <div>
            {label && (
                <label
                    htmlFor={name}
                    className="mb-2 block text-sm font-semibold text-zinc-300"
                >
                    {label}
                </label>
            )}

            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-300"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}