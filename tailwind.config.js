/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F0',
        gold: {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#F6D860',
          400: '#E8C547',
          500: '#D4AF37',
          600: '#B8960C',
        },
        sage: {
          100: '#E8EDE4',
          200: '#C8D5C0',
          300: '#A8BC9C',
          400: '#7A9C6A',
          500: '#5A7A4A',
          600: '#3D5C30',
        },
        terra: {
          100: '#F5E6DC',
          200: '#E8C9B4',
          300: '#D4A882',
          400: '#C08B5F',
          500: '#A67040',
          600: '#7D5228',
        },
        charcoal: {
          700: '#3D3530',
          800: '#2A2420',
          900: '#1A1510',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
