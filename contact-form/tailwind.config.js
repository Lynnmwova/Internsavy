/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",

  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
