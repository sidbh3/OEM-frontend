/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins","sans-serif"]
      },
      colors:{
        darkBlue:"#000080",
        skyBlue :"#0000FF",
        lightBlue:"#9999CC",
        lightWhiteOpacity:"rgba(255,255,255,0.25)",
        darkLightWhiteOpacity:"rgba(255,255,255,0.5)",
        lightGreen:"#16C09861",
        darkGreen:"#008767",
        lightPurple:"rgba(0, 0, 128, 0.4)",
        lightGray :"#8E8B82"
      },
      boxShadow:{
        '3xl':'10px 10px 20px -2px rgba(0,0,0,0.5)',
        '4xl':'0 0 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}