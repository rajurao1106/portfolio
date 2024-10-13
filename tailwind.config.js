/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Whisper: ['Whisper', 'cursive'], // Quotes added around 'cursive'
      },
    },
  },
  plugins: [],
}
