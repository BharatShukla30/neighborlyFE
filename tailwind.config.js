/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3a8df5",
        chatBg: "#f1f6fb",
        cblue: "#177a8d",
        appTheme: "#90E0EF",
        mainBg: "#f5f5f5"
      },
      height: {
        page: "calc(100vh - 10rem)",
        chat: "calc(500px+10rem)",
      },
      fontSize : {
        'small' : '1.125rem',
        'body2' : '1.25rem',
        'body1' : '1.5625rem',
        'h4' : '1.9375rem',
        'h3' : '2.4375rem',
        'h2' : '3.0625rem',
        'h1' : '3.8125rem',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: [],
  corePlugins: {
    scrollbarHide: true,
  },
};
