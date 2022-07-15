/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Containers/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}",
  ],

  enabled: process.env.NODE_ENV === "production",

  theme: {
    extend: {
      colors: {
        dark: "#303841",
        light: "#EEEEEE",
        gold: "#F6C90E",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
  ],
};
