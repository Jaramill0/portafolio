/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [
    require("postcss-nesting"), // O 'postcss-nested'
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
