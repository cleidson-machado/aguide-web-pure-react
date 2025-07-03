import React, { useState } from "react";
import RegistrationModal from "../components/RegistrationModal";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Usamos a fonte 'sans' (Poppins) e a cor de texto escura por padrão
    <div className="font-sans text-neutral-dark bg-neutral-light min-h-screen flex flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-blue">
          Seu Guia de Portugal para Brasileiros
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Tudo o que você precisa para explorar, morar ou visitar Portugal, na
          palma da sua mão.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => alert("Ação para baixar o App!")}
            className="bg-brand-green text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Baixar o App
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent border-2 border-brand-blue text-brand-blue font-bold py-3 px-8 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
          >
            Cadastre-se para Novidades
          </button>
        </div>
      </main>

      {/* O Modal só é renderizado se isModalOpen for true */}
      {isModalOpen && (
        <RegistrationModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default LandingPage;
