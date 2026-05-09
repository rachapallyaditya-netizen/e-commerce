/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:      '#FDF6EC',
        oatmeal:    '#E8DFD0',
        terracotta: '#C67D5B',
        'terracotta-dark': '#A96544',
        sage:       '#A3B18A',
        'sage-dark':'#8A9B6E',
        charcoal:   '#3D3D3D',
        'warm-white':'#FFFAF3',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'slide-in-right': {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%':   { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'pop': {
          '0%':   { transform: 'scale(1)' },
          '50%':  { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'slide-in':  'slide-in-right 0.35s ease-out forwards',
        'slide-out': 'slide-out-right 0.3s ease-in forwards',
        'fade-in':   'fade-in 0.3s ease-out forwards',
        'fade-out':  'fade-out 0.25s ease-in forwards',
        'pop':       'pop 0.3s ease-in-out',
        'float':     'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
