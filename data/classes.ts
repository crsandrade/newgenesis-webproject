import type { GameClass } from "@/types/class"; 

export const classes:GameClass[] = [
  {
    id: "guerreiro-imperial",
    name: "Guerreiro Imperial",
    role: "Tanque / Corpo a corpo",
    difficulty: "Fácil",
    image: "/images/classes/imperial-warrior.png",
    description:
      "Treinado nas legiões imperiais, é ideal para quem gosta de resistência, escudo e combate direto.",
  },
  {
    id: "berserker-nordico",
    name: "Berserker Nórdico",
    role: "Dano físico / Fúria",
    difficulty: "Médio",
    image: "/images/classes/imperial-warrior.png",
    description:
      "Um guerreiro agressivo que causa alto dano corpo a corpo, sacrificando defesa por poder ofensivo.",
  },
  {
    id: "oraculo-runico",
    name: "Oráculo Rúnico",
    role: "Suporte / Magia",
    difficulty: "Difícil",
    image: "/images/classes/imperial-warrior.png",
    description:
      "Manipula runas antigas para curar aliados, aplicar efeitos negativos e controlar o ritmo das batalhas.",
  },
];