export interface CashPackage {
  id: string;
  name: string;
  cashAmount: number;
  price: number;
  bonus: number;
}

export const cashPackages: CashPackage[] = [
  {
    id: "cash-1000",
    name: "1.000 Cash",
    cashAmount: 1000,
    price: 9.9,
    bonus: 0,
  },
  {
    id: "cash-5000",
    name: "5.000 Cash",
    cashAmount: 5000,
    price: 49.9,
    bonus: 500,
  },
  {
    id: "cash-10000",
    name: "10.000 Cash",
    cashAmount: 10000,
    price: 89.9,
    bonus: 1500,
  },
];