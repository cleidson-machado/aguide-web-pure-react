import React from "react";
import { useUserRegistration } from "./useUserRegistration";

interface RegistrationFormProps {
  onSuccess: () => void;
}

const UserRegistrationForm: React.FC<RegistrationFormProps> = ({
  onSuccess,
}) => {
  const { form, isLoading, handleChange, handleSubmit } =
    useUserRegistration(onSuccess);

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
          name="name"
          value={form.name}
          onChange={handleChange}
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
          name="surname"
          value={form.surname}
          onChange={handleChange}
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
          name="email"
          value={form.email}
          onChange={handleChange}
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
          name="password"
          value={form.password}
          onChange={handleChange}
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
