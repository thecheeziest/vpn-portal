/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'my-org': '#F59F27',
        'my-lorg': '#DFC7A6',
        'my-500': '#4C5869',
        'my-400': '#687890',
        'my-300': '#929EB0',
        'my-200': '#C1C7D0',
        'my-100': '#E0E3E8',
        'my-050': '#F6F7F7',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'pastel',
      'dim'
    ],
  }
}   