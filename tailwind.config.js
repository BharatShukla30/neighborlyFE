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
        chatBg: "#f1f6fb",
        cblue: "#177a8d"
      },
      height: {
        page: 'calc(100vh - 10rem)',
        chat: 'calc(500px+10rem)',
      },
      backgroundImage: () => ({
        'logo': "url('/src/assets/chatBg.png')",
        "world": "url('/src/assets/world.jpg')",
      })

    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    

  },
  plugins: [],
  corePlugins: {
    scrollbarHide: true,
  },
}

