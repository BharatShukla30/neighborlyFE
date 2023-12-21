/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#3a8df5",
        chatBg: "#f1f6fb"
      }
    },
  },
  plugins: [],
}

