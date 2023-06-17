/** @type {import('tailwindcss').Config} */
export default {
  content: [
    /** @type {import('tailwindcss').Config} */
    (
      module.exports = {
        content: ["./src/**/*.{html,jsx}", "./components/**/*.{html,jsx}"],
        theme: {
          extend: {},
        },
        plugins: [],
      }
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
