/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ballunShape: {
          "0%": { transform: "translateY(-30px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(-30px)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-out both",
        ballunShape: "ballunShape 3s infinite linear",
      },
      colors: {
        primarycolor: '#039873',
        secondarycolor: '#3D927D',
        greencolor1: '#02B78A',
        drakgreen1: '#014B39',
        drakgreen2: '#00372A',
      },
      boxShadow: {
        serviceshadow: '0px 4px 50px 3px #0000000D'
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(180deg, #F0FFF9 0%, #F0FFFF 100%)'
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%', 
        md: '100%', 
        lg: '1024px', 
        xl: '1280px', 
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}