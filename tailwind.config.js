/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "3rem",
      },
      colors: {
        dark: "#0a0a0a",
        darkLight: "#404040",
        brand: "#00ADB5",
        light: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
