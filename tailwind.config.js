/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#F2C819",
      },
    },
  },
  plugins: [require("daisyui")],
};
