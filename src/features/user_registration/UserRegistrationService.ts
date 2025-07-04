import { UserRegisterPayload } from "./UserRegisterPayload";

export async function registerUser(
  payload: UserRegisterPayload
): Promise<void> {
  const baseUrl = process.env.REACT_APP_API_BASE_URL; // or VITE_API_BASE_URL for Vite
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar usuário");
  }
}
