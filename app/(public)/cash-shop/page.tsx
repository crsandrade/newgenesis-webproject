import type { Metadata } from "next";

import { CashShopContent } from "./CashShopContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cash Shop",
  description: "Compre Cash para New Genesis",
};

export default function CashShopPage() {
  return <CashShopContent />;
}