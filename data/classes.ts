import type { GameClass } from "@/types/class"; 

export const classes:GameClass[] = [
  {
    id: "tk",
    name: "TransKnight",
    role: "Tanque / Corpo a corpo",
    difficulty: "Fácil",
    image: "/images/classes/tk.png",
    description:
      "Um combatente disciplinado, que jurou proteger os mais fracos.",
  },
  {
    id: "bm",
    name: "BeastMaster",
    role: "Dano físico / Suporte / Fúria",
    difficulty: "Médio",
    image: "/images/classes/bm.png",
    description:
      "Estudante das artes divinas da magia.",
  },
  {
    id: "fm",
    name: "Foema",
    role: "Suporte / Magia",
    difficulty: "Difícil",
    image: "/images/classes/fm.png",
    description:
      "Manipula runas antigas para curar aliados, aplicar efeitos negativos e controlar o ritmo das batalhas.",
  },
  {id: "ht",
    name: "Huntress",
    role: "Ataque a Distância / Ataque Explosivo ",
    difficulty: "Difícil",
    image: "/images/classes/ht.png",
    description:
      "Perseguidora esguia com alta capacidade de sobrevivência.",
  }
];

[
  {
    name: "TransKnight",
    image: "/images/classes/tk.png",
    role: "Tanque / Corpo a corpo",
    description:
      "Um combatente disciplinado, que jurou proteger os mais fracos.",
  },
  {
    name: "BeastMaster",
    image: "/images/classes/bm.png",
    role: "Tanque / Utilidade",
    description:
      "Guerreiro da natureza, pode evocar espíritos para ajuda-lo.",
  },
  {
    name: "Foema",
    image: "/images/classes/fm.png",
    role: "Suporte / Magia",
    description:
      "Estudante das artes divinas da magia.",
  },
   {
    name: "Huntress",
    image: "/images/classes/ht.png",
    role: "Ataque Explosivo / Distância",
    description:
      "Perseguidora esguia com alta capacidade de sobrevivência.",
  },
];