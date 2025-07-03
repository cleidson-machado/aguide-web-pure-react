// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Aqui definimos nossa paleta de cores customizada
      colors: {
        "brand-blue": "#002D5B", // Um azul marinho, sóbrio
        "brand-green": "#009639", // Verde vibrante
        "accent-gold": "#FFC72C", // Amarelo/dourado para CTAs
        "neutral-light": "#F8F8F8", // Um cinza quase branco para fundos
        "neutral-dark": "#2D2D2D", // Cinza escuro para textos
      },
      // Aqui definimos nossa fonte padrão
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
