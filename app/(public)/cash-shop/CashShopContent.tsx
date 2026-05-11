"use client";

import { useState } from "react";

import { cashPackages } from "@/data/cash-packages";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";

export function CashShopContent() {
  const [message, setMessage] = useState("");

  async function handlePurchase(packageId: string) {
    setMessage("Processando compra...");

    try {
      const response = await fetch("/api/cash-orders", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: "rafael",
          email: "rafael@email.com",
          packageId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Erro ao criar pedido.");
        return;
      }

      setMessage(
        `Pedido criado com sucesso. ID: ${data.orderId}`
      );
    } catch {
      setMessage("Erro interno ao processar compra.");
    }
  }

  return (
    <main className="min-h-screen bg-[#09090b] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Cash Shop"
          title="Adicione Cash à sua conta"
          description="Escolha um pacote de Cash para testar o fluxo de compra do New Genesis."
        />

        {message && (
          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-4 text-amber-200">
            {message}
          </div>
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cashPackages.map((item) => (
            <Card key={item.id}>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                Pacote
              </p>

              <h2 className="mt-4 text-3xl font-black">
                {item.name}
              </h2>

              <p className="mt-4 text-zinc-400">
                Cash base: {item.cashAmount}
              </p>

              {item.bonus > 0 && (
                <p className="mt-2 font-bold text-amber-300">
                  Bônus: +{item.bonus} Cash
                </p>
              )}

              <p className="mt-8 text-2xl font-black">
                R${" "}
                {item.price.toFixed(2).replace(".", ",")}
              </p>

              <button
                onClick={() =>
                  handlePurchase(item.id)
                }
                className="mt-8 w-full rounded-xl bg-amber-400 py-4 font-black text-black transition hover:bg-amber-300"
              >
                Comprar/Testar
              </button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}