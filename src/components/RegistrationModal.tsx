import React from "react";
import RegistrationForm from "./user/RegistrationForm";

interface RegistrationModalProps {
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
  return (
    // Overlay: fixo, cobre a tela toda, fundo preto com 50% de opacidade
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Conteúdo do Modal: impede que o clique no conteúdo feche o modal */}
      <div
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-2 text-2xl font-bold text-center text-brand-blue">
          Crie sua conta AGORA!
        </h2>
        <p className="mb-6 text-center text-neutral-dark">
          É rápido e fácil e você terá ainda <br /> acesso a benefícios
          exclusivos.
        </p>

        <RegistrationForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default RegistrationModal;
