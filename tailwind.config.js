/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9", // Cyan/Blue
        secondary: "#8B5CF6", // Purple
        accent: "#F97316", // Orange
        dark: "#0F172A",
        light: "#F8FAFC",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, #ebf4ff, #e0e7ff, #f3e8ff)',
      }
    },
  },
  plugins: [],
}
