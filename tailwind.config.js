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
        "main-desktop": "url('/bg-main-desktop.png')",
        "card-front": "url('/bg-card-front.png')",
        "card-back": "url('/bg-card-back.png')",
      },
      colors: {
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        "linear-violet":"hsl(249, 99%, 64%)",
        "linear-purple":"hsl(278, 94%, 30%)",
        "error-red":"hsl(0, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
