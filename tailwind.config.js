/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#495E57',  // This makes `bg-primary` work
          yellow: '#F4CE14',
          green: '#495E57',
        },
        secondary: {
          salmon: '#EE9972',
          peach: '#FBDABB',
        },
        highlight: {
          light: '#EDEFEE',
          dark: '#333333',
        }
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'markazi': ['Markazi Text', 'serif'],
      },
    },
  },
  plugins: [],
}