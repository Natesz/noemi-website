/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#8DBAD4',
        secondary: '#B8A9CC',
        accent:    '#C9E0EC',
        heading:   '#2A3547',
        'text-main': '#3D4A5C',
        'bg-soft':  '#F4F4F6',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
