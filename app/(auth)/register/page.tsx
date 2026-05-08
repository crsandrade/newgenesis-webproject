import type { Metadata } from "next";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: "Registro | New Genesis",
  description: "Cadastre-se e comece a escrever o seu futuro."
}

export default function RegisterPage() {
  return <RegisterForm />;
}