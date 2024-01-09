/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',     
        secondary: '#718096 ', 
        white:"#fff",
        black:"#000" 
      },
    },
  },
  plugins: [],
}

