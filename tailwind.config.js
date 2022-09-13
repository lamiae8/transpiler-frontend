/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    screens: {
      '2xl':{'max':'1536px'},	
      'xl':{'max':'1280px'},	
      'lg':{'max':'1024px'},	
      'md':{'max':'768px'},	
      'sm':{'max':'640px'},	

      'Ml': {'max': '425px'}, // mobile large
      // => @media (max-width: 1023px) { ... }

      'Mm': {'max': '375px'},  // mobile meduim
      // => @media (max-width: 767px) { ... }

      'Ms': {'max': '320px'},  // mobile small
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
    container: {
      center: true,
    },
  },
plugins: [require("daisyui")],
daisyui: {
  themes: [ "night", "winter", "cupcake", "dark" , "light"],
},

}
