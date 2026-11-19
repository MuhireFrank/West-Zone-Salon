/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#121212',
        charcoal: '#1b1717',
        gold: '#D71F1F',
        'gold-soft': '#F25A5A',
        mist: '#FFF7F7',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      boxShadow: {
        gold: '0 18px 60px -28px rgba(215, 31, 31, 0.55)',
        card: '0 24px 70px -40px rgba(18, 18, 18, 0.75)',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #F5B4B4 0%, #D71F1F 45%, #8C0E0E 100%)',
        'dark-gradient':
          'linear-gradient(180deg, rgba(18,18,18,0.15) 0%, rgba(18,18,18,0.88) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slow-zoom 18s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
