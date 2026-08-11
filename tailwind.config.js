/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // babakék
        primary:      '#8DBAD4',
        'primary-dark': '#6A9CBB',
        'primary-soft': '#D6E9F5',
        accent:       '#D6E9F5',
        // szürkék
        heading:      '#2F3A45',
        'text-main':  '#4A5561',
        secondary:    '#9AA7B4',
        muted:        '#7A8794',
        line:         '#E4E9ED',
        'bg-soft':    '#F5F7F9',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
