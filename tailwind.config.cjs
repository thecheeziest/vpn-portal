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
      fontFamily: {
        
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'pastel',
      'forest'
      // {'pastel': {
      //   "base-100": "#f9fafb",
      //   "base-200": "#f9fafb",
      //   "base-300": "#d1d5db",
      //   "base-content": "#161616",

      //   "secondary": "#4C5869", // 500
      //   "primary": "#687890", // 400
      //   "accent": "#929EB0", // 300
      //   "secondary-content": "#C1C7D0", // 200
      //   "primary-content": "#E0E3E8", // 100
      //   "accent-content": "#F6F7F7", // 50

      //   "warning": "#F59F27", // org
      //   "warning-content": "#DFC7A6", // lorg
      // }},
      // {'forest': {
      //   "base-100": "#151f2b",
      //   "base-content": "#d4d7dd",

      //   "secondary": "#232f3d", // 500
      //   "primary": "rgba(76, 88, 105, 0.5)", // 400
      //   "accent": "rgba(76, 88, 105, 0.5)", // 300
      //   "secondary-content": "#1b1f24", // 200
      //   "primary-content": "#495463", // 100
      //   "accent-content": "#F6F7F7", // 50

      //   "warning": "#a86111", // org
      //   "warning-content": "#DFC7A6", // lorg
      // }},
    ],
  }
}   