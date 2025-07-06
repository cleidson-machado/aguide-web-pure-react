import React, { useState } from "react";
import UserRegistrationModal from "../features/identity_creation/IdentityCreationModal";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Usamos a fonte 'sans' (Poppins) e a cor de texto escura por padrão
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-sans text-neutral-dark bg-neutral-light">
      <main className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl text-brand-blue">
          Seu Guia de Portugal para Brasileiros
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl">
          Tudo o que você precisa para explorar, morar ou visitar Portugal, na
          palma da sua mão.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
          <button
            onClick={() => alert("Ação para baixar o App!")}
            className="px-8 py-3 font-bold text-white transition-colors rounded-lg bg-brand-green hover:bg-opacity-90"
          >
            Baixar o App
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 font-bold transition-colors bg-transparent border-2 rounded-lg border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
          >
            Cadastre-se para Novidades
          </button>
        </div>
      </main>

      {/* O Modal só é renderizado se isModalOpen for true */}
      {isModalOpen && (
        <UserRegistrationModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default LandingPage;
