/*
  Regra de Ouro para Lembrar:

  - Se o arquivo termina com .js (e não há "type": "module" no package.json)
    -> Use require().

  - Se o arquivo termina com .mjs (ou se tem "type": "module" no package.json)
    -> Use import.

  Como este arquivo termina em .mjs, usamos 'import' para carregar módulos.
*/
import fetch from "node-fetch";

async function main() {
  const start = Date.now();
  try {
    const response = await fetch("http://localhost:8080/users");
    const duration = Date.now() - start;

    if (!response.ok) {
      console.error("API respondeu com erro:", response.status);
      process.exit(1);
    }

    if (duration >= 1000) {
      console.error("Latência alta:", duration, "ms");
      process.exit(1);
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      console.error("Resposta não é um array:", data);
      process.exit(1);
    }

    console.log("API online! Latência:", duration, "ms. Resposta OK.");
    process.exit(0);
  } catch (err) {
    console.error("Erro ao acessar a API:", err.message);
    process.exit(1);
  }
}

main();
