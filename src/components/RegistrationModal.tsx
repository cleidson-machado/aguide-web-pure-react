import React from "react";
import RegistrationForm from "./user/RegistrationForm";

interface RegistrationModalProps {
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
  return (
    // Overlay: fixo, cobre a tela toda, fundo preto com 50% de opacidade
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Fecha o modal ao clicar no fundo
    >
      {/* Conteúdo do Modal: impede que o clique no conteúdo feche o modal */}
      <div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-brand-blue mb-2">
          Crie sua conta
        </h2>
        <p className="mb-6 text-neutral-dark">
          É rápido e você terá acesso a benefícios exclusivos.
        </p>

        <RegistrationForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default RegistrationModal;
