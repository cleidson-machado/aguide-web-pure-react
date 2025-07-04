import React from "react";
import UserRegistrationForm from "./UserRegistrationForm";

interface UserRegistrationModalProps {
  onClose: () => void;
}

const UserRegistrationModal: React.FC<UserRegistrationModalProps> = ({
  onClose,
}) => {
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

        <UserRegistrationForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default UserRegistrationModal;
