"use server";

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

export async function registerUser(
  data: RegisterUserData
) {
  console.log("Usuário registrado:", data);

  return {
    success: true,
  };
}