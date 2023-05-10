/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { fontFamily: {
    'inter': ['Inter', 'sans-serif']
  },
    extend: {
      colors: {
        'color-btn': '#FF3811',
        'title-color': '#151515',
        'description-color': '#737373',
        'service-title': '#444444',
      },
    },
  },
  plugins: [require("daisyui")],
}