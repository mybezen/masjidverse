/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E", // Warna utama
        secondary: "#EAB308", // Warna sekunder
        accent: "#DC2626", // Warna aksen
      },
    },
  },
  plugins: [],
};
