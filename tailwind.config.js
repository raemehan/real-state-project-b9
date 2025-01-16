/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: '#A3C4F3',     // For calming sky blue
        lightSage: '#B8D8B8',    // For earthy green
        warmBeige: '#F5EEDC',    // For neutral beige
        paleLavender: '#E8DFF5', // For subtle lavender
        mutedGray: '#C5C6C7',    // For grounding gray
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}