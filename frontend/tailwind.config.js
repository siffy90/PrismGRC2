/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        vantaBlue: "#3182ce",
        vantaGreen: "#38a169",
        vantaYellow: "#d69e2e"
      }
    }
  },
  plugins: []
};
