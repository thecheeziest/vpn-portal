/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'my-cocoa': '#403d39',
        'my-dusty': '#928d84',
        'my-beige': '#ccc5b9',
        'my-light': '#EBE3D5',
        'my-cream': '#fffcf2',
      },
      fontFamily: {
        
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "autumn",
      "forest"
    ],
    darkTheme: "forest"
  }
}