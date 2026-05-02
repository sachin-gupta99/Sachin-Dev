/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050510',
          900: '#0a0a18',
          800: '#12122a',
          700: '#1b1b3a',
          600: '#2a2a55',
        },
        violet: {
          50: '#f4f1ff',
          100: '#ebe4ff',
          200: '#d7caff',
          300: '#b8a0ff',
          400: '#9a78ff',
          500: '#7c4dff',
          600: '#6a2bff',
          700: '#5a1fd6',
          800: '#441aa3',
          900: '#2c0f6b',
        },
        mint: {
          300: '#7ef2c3',
          400: '#4ee3a5',
          500: '#2dd48a',
        },
        accent: {
          DEFAULT: '#9a78ff',
          soft: '#c4b1ff',
          deep: '#5a1fd6',
          alt: '#4ee3a5',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 10px 60px -20px rgba(154, 120, 255, 0.55)',
        'glow-mint': '0 10px 60px -20px rgba(78, 227, 165, 0.45)',
        'inner-ring': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, rgba(5,5,16,0.9) 85%), linear-gradient(rgba(154,120,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(154,120,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-40': 'auto, 40px 40px, 40px 40px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'gradient-x': 'gradientX 10s ease infinite',
        'blob': 'blob 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 20px) scale(0.96)' },
        },
      },
    },
  },
  plugins: [],
};
