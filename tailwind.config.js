/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003d82",
          light: "#1d68c4",
          dark: "#002957",
        },
        secondary: {
          DEFAULT: "#1a7d76",
          light: "#229c93",
          dark: "#14635d",
        },
        accent: {
          DEFAULT: "#ff6b35",
          light: "#ff8555",
          dark: "#e05522",
        },
        "call-red": {
          DEFAULT: "#ff6b35",
          hover: "#e05522",
        },
        "text-dark": "#1a202c",
        "text-light": "#f8fafc",
      },
    },
  },
  plugins: [],
};
