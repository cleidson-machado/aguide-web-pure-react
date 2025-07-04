import React, { useState } from "react";
import { registerUser } from "./UserRegistrationService";

interface RegistrationFormProps {
  onSuccess: () => void;
}

const UserRegistrationForm: React.FC<RegistrationFormProps> = ({
  onSuccess,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await registerUser({
        name,
        surname,
        email,
        passwd: password,
      });
      alert("Cadastro realizado com sucesso!");
      onSuccess();
    } catch (error: any) {
      alert("Erro ao cadastrar usuário. Tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
          required
        />
      </div>
      <div>
        <label
          htmlFor="surname"
          className="block text-sm font-medium text-gray-700"
        >
          Sobrenome
        </label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Senha
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
          required
        />
      </div>
      <div className="flex justify-start gap-3">
        {/* Create Account Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 px-6 py-2 font-bold transition-colors rounded-lg bg-accent-gold text-brand-blue hover:bg-opacity-90 disabled:bg-gray-400"
        >
          {isLoading ? "Cadastrando..." : "Criar Conta"}
        </button>
        {/* Exit Modal Button */}
        <button
          type="button"
          onClick={onSuccess}
          className="w-[100px] px-4 py-2 font-medium text-black transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
          disabled={isLoading}
        >
          SAIR
        </button>
      </div>
    </form>
  );
};

export default UserRegistrationForm;
