/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myblue: '#2A2FAB',
        lightBlue: '#0070CC',
      },
    },
  },
  plugins: [],
}
