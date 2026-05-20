"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FormInput } from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { createClient } from "@/lib/supabase/client";

interface PackageItem {
  item_name: string;
  item_code: string;

  ef1: string;
  efv1: string;

  ef2: string;
  efv2: string;

  ef3: string;
  efv3: string;
}

export function CreateCashPackageForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [cashAmount, setCashAmount] = useState("");
  const [bonusDescription, setBonusDescription] = useState("");

  const [items, setItems] = useState<PackageItem[]>([
    {
      item_name: "",
      item_code: "",

      ef1: "0",
      efv1: "0",

      ef2: "0",
      efv2: "0",

      ef3: "0",
      efv3: "0",
    },
  ]);

  const [error, setError] = useState("");

  function addItem() {
    setItems((current) => [
      ...current,
      {
        item_name: "",
        item_code: "",

        ef1: "0",
        efv1: "0",

        ef2: "0",
        efv2: "0",

        ef3: "0",
        efv3: "0",
      },
    ]);
  }

  function removeItem(index: number) {
    setItems((current) =>
      current.filter((_, itemIndex) => itemIndex !== index)
    );
  }

  function updateItem(
    index: number,
    field: keyof PackageItem,
    value: string
  ) {
    setItems((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    const supabase = createClient();

    const { data: packageData, error: packageError } =
      await supabase
        .from("cash_packages")
        .insert({
          title,
          price_brl: Number(price),
          cash_amount: Number(cashAmount),
          bonus_description: bonusDescription,
          is_active: true,
        })
        .select()
        .single();

    if (packageError || !packageData) {
      setError(packageError?.message || "Erro ao criar pacote.");
      return;
    }

    const formattedItems = items.map((item) => ({
      package_id: packageData.id,

      item_name: item.item_name,
      item_code: item.item_code,

      ef1: item.ef1,
      efv1: item.efv1,

      ef2: item.ef2,
      efv2: item.efv2,

      ef3: item.ef3,
      efv3: item.efv3,
    }));

    const { error: itemsError } = await supabase
      .from("cash_package_items")
      .insert(formattedItems);

    if (itemsError) {
      setError(itemsError.message);
      return;
    }

    router.push("/admin/cash-shop");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-5"
    >
      <FormInput
        label="Título do pacote"
        type="text"
        name="title"
        placeholder="Ex: Pacote VIP"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
      />

      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Preço em real"
          type="number"
          name="price"
          placeholder="49.90"
          value={price}
          onChange={(event) =>
            setPrice(event.target.value)
          }
        />

        <FormInput
          label="Quantidade de cash"
          type="number"
          name="cashAmount"
          placeholder="1000"
          value={cashAmount}
          onChange={(event) =>
            setCashAmount(event.target.value)
          }
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

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">
                Item #{index + 1}
              </h2>

              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-sm font-bold text-red-400"
                >
                  Remover
                </button>
              )}
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <FormInput
                label="Nome do TXT"
                type="text"
                name={`item_name_${index}`}
                placeholder="cash_1000"
                value={item.item_name}
                onChange={(event) =>
                  updateItem(
                    index,
                    "item_name",
                    event.target.value
                  )
                }
              />

              <FormInput
                label="Código do item"
                type="text"
                name={`item_code_${index}`}
                placeholder="3201"
                value={item.item_code}
                onChange={(event) =>
                  updateItem(
                    index,
                    "item_code",
                    event.target.value
                  )
                }
              />
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <FormInput
                label="Ef1"
                type="text"
                name={`ef1_${index}`}
                placeholder="0"
                value={item.ef1}
                onChange={(event) =>
                  updateItem(
                    index,
                    "ef1",
                    event.target.value
                  )
                }
              />

              <FormInput
                label="Efv1"
                type="text"
                name={`efv1_${index}`}
                placeholder="0"
                value={item.efv1}
                onChange={(event) =>
                  updateItem(
                    index,
                    "efv1",
                    event.target.value
                  )
                }
              />

              <FormInput
                label="Ef2"
                type="text"
                name={`ef2_${index}`}
                placeholder="0"
                value={item.ef2}
                onChange={(event) =>
                  updateItem(
                    index,
                    "ef2",
                    event.target.value
                  )
                }
              />

              <FormInput
                label="Efv2"
                type="text"
                name={`efv2_${index}`}
                placeholder="0"
                value={item.efv2}
                onChange={(event) =>
                  updateItem(
                    index,
                    "efv2",
                    event.target.value
                  )
                }
              />

              <FormInput
                label="Ef3"
                type="text"
                name={`ef3_${index}`}
                placeholder="0"
                value={item.ef3}
                onChange={(event) =>
                  updateItem(
                    index,
                    "ef3",
                    event.target.value
                  )
                }
              />

              <FormInput
                label="Efv3"
                type="text"
                name={`efv3_${index}`}
                placeholder="0"
                value={item.efv3}
                onChange={(event) =>
                  updateItem(
                    index,
                    "efv3",
                    event.target.value
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addItem}
        className="rounded-xl border border-white/10 px-5 py-3 font-bold text-zinc-300 transition hover:border-amber-300 hover:text-amber-300"
      >
        + Adicionar Item
      </button>

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