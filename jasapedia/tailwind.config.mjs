/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          light: '#818CF8',
          dark: '#3730A3',
        },
        accent: '#F97316',
      },
    },
  },
  plugins: [],
};
