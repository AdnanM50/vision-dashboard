/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0E46A3",
        secondary: "#FF8C00",
        bgLine: "#B3B3B3",
        heading: "#24315E",
        bghover: "#88858541",
        bgicon: "#0075FF",
        textgray: "#A0AEC0",
        textgreen: "#01B574",

      },
    },
  },
  plugins: [],
};
