/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        mono: {
          0: '#FFFFFF',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
          1000: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 12vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '800' }],
        'display-md': ['clamp(1.5rem, 3.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      boxShadow: {
        hard: '6px 6px 0 0 var(--tw-shadow-color, #FFFFFF)',
        'hard-sm': '3px 3px 0 0 var(--tw-shadow-color, #FFFFFF)',
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'bounce-slow': 'bounceSlow 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, 12px)' },
        },
      },
    },
  },
  plugins: [],
};