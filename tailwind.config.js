/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#160021',
        paper: '#FBF7FC',
        mist: '#E9DEF0',
        mist2: '#D8C6E6',
        purple: {
          400: '#9B4DCB',
          600: '#66019D',
          700: '#560082',
          900: '#33004E',
        },
        sunbeam: {
          400: '#FFD24A',
          500: '#FFC629',
          600: '#F0A800',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        pulseBar: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        floatIn: 'floatIn 0.7s ease-out forwards',
        gentleBounce: 'gentleBounce 2.2s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
