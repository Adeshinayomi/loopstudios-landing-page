/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        Grey200: "hsl(0, 0%, 85%)"
      },
      fontFamily:{
        alata: ["Alata", "sans-serif"],
        josefin:["Josefin Sans", "sans-serif"]
      },
      backgroundImage:{
        'hero':
        "url('assets/images/mobile/image-hero.jpg')",
        'md-hero':
        "url('assets/images/desktop/image-hero.jpg')"
      }
    },
  },
  plugins: [],
}
