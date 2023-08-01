/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "blue-black": "#0f182a",
      "bright-blue": "#38bdf8",
      "slate-gray": "#d7dde6",
      "bright-gray": "#e2e8f0",
      "dark-gray": "#64748b",
    },
    extend: {},
  },
  plugins: [],
};
