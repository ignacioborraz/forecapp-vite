/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        generico: "url('/fondo_generico.png')",
        lluvia: "url('/fondo_lluvia.png')",
        nieve: "url('/fondo_nieve.png')",
        noche: "url('/fondo_noche.png')",
        dia: "url('/fondo_dia.png')",
        nublado: "url('/fondo_nublado.png')",
        genericohd: "url('/fondo_generico_hd.png')",
        lluviahd: "url('/fondo_lluvia_hd.png')",
        nievehd: "url('/fondo_nieve_hd.png')",
        nochehd: "url('/fondo_noche_hd.png')",
        diahd: "url('/fondo_dia_hd.png')",
        nubladohd: "url('/fondo_nublado_hd.png')",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
      keyframes: {
        "bounce-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(2px)" },
        },
        "bounce-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-2px)" },
        },
      },
      animation: {
        "bounce-right": "bounce-right 1s infinite",
        "bounce-left": "bounce-left 1s infinite",
      },
    },
  },
  plugins: [],
};
