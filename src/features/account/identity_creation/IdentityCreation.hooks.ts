import { useState } from "react";
import { saveUser } from "./IdentityCreationService";

export function useRegistrationForm(onSuccess: () => void) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Submitting form:", form.password);
    try {
      await saveUser({
        name: form.name,
        surname: form.surname,
        email: form.email,
        passwd: form.password,
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

  return {
    form,
    isLoading,
    handleChange,
    handleSubmit,
    setForm, // caso queira resetar ou manipular de fora
  };
}
