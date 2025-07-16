// CÓDIGO MODIFICADO COM O BEARER TOKEN
import { UserRegisterPayload } from "./IdentityCreationPayload";

export async function saveUser(payload: UserRegisterPayload): Promise<void> {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  // 1. Pega o token do ambiente.
  const apiToken = process.env.REACT_APP_API_STATIC_TOKEN;

  // 2. Monta o cabeçalho de autorização.
  //    O formato é "Bearer " (com um espaço no final) seguido do token.
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (apiToken) {
    headers["Authorization"] = `Bearer ${apiToken}`;
  }

  console.log("Headers being sent:", payload);

  // 3. Faz a chamada fetch com os novos headers.
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
    // ⚠️ APENAS PARA DESENVOLVIMENTO LOCAL
    ...(process.env.NODE_ENV === "development" && {
      // Para alguns navegadores/ambientes
      mode: "cors",
      credentials: "omit",
    }),
  });

  if (!response.ok) {
    // Se o erro for 401, podemos dar uma mensagem mais específica
    if (response.status === 401) {
      throw new Error("Não autorizado. Verifique se o token da API é válido.");
    }
    throw new Error("Erro ao criar usuário");
  }
}
