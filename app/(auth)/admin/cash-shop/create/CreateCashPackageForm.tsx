"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FormInput } from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { createClient } from "@/lib/supabase/client";

export function CreateCashPackageForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [cashAmount, setCashAmount] = useState("");
  const [bonusDescription, setBonusDescription] = useState("");

  const [itemName, setItemName] = useState("");
  const [itemCode, setItemCode] = useState("");

  const [ef1, setEf1] = useState("");
  const [efv1, setEfv1] = useState("");

  const [ef2, setEf2] = useState("");
  const [efv2, setEfv2] = useState("");

  const [ef3, setEf3] = useState("");
  const [efv3, setEfv3] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const supabase = createClient();

    const { error } = await supabase
      .from("cash_packages")
      .insert({
        title,
        price_brl: Number(price),
        cash_amount: Number(cashAmount),
        bonus_description: bonusDescription,

        item_name: itemName,
        item_code: itemCode,

        ef1,
        efv1,

        ef2,
        efv2,

        ef3,
        efv3,

        is_active: true,
      });

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin/cash-shop");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <FormInput
        label="Título do pacote"
        type="text"
        name="title"
        placeholder="Ex: Pacote 1000 Cash"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Preço em real"
          type="number"
          name="price"
          placeholder="49.90"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <FormInput
          label="Quantidade de cash"
          type="number"
          name="cashAmount"
          placeholder="1000"
          value={cashAmount}
          onChange={(event) => setCashAmount(event.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-zinc-300">
          Descrição bônus
        </label>

        <textarea
          rows={4}
          value={bonusDescription}
          onChange={(event) =>
            setBonusDescription(event.target.value)
          }
          className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-300"
        />
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-2xl font-black">
          Dados do TXT
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <FormInput
            label="Nome do TXT"
            type="text"
            name="itemName"
            placeholder="cash_1000"
            value={itemName}
            onChange={(event) =>
              setItemName(event.target.value)
            }
          />

          <FormInput
            label="Código do item"
            type="text"
            name="itemCode"
            placeholder="3201"
            value={itemCode}
            onChange={(event) =>
              setItemCode(event.target.value)
            }
          />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <FormInput
            label="Ef1"
            type="text"
            name="ef1"
            placeholder="0"
            value={ef1}
            onChange={(event) => setEf1(event.target.value)}
          />

          <FormInput
            label="Efv1"
            type="text"
            name="efv1"
            placeholder="0"
            value={efv1}
            onChange={(event) => setEfv1(event.target.value)}
          />

          <FormInput
            label="Ef2"
            type="text"
            name="ef2"
            placeholder="0"
            value={ef2}
            onChange={(event) => setEf2(event.target.value)}
          />

          <FormInput
            label="Efv2"
            type="text"
            name="efv2"
            placeholder="0"
            value={efv2}
            onChange={(event) => setEfv2(event.target.value)}
          />

          <FormInput
            label="Ef3"
            type="text"
            name="ef3"
            placeholder="0"
            value={ef3}
            onChange={(event) => setEf3(event.target.value)}
          />

          <FormInput
            label="Efv3"
            type="text"
            name="efv3"
            placeholder="0"
            value={efv3}
            onChange={(event) => setEfv3(event.target.value)}
          />
        </div>
      </div>

      <SubmitButton>
        Criar pacote
      </SubmitButton>

      {error && (
        <p className="text-sm font-semibold text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}