/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0b0b0c',
          2: '#2b2d31',
          3: '#4b4e55',
        },
        muted: '#5f6470',
        line: '#e3e6ed',
        primary: {
          DEFAULT: '#1f5eff',
          hover: '#0d4cf5',
          light: '#eef4ff',
        },
        sky: {
          from: '#b9d4ff',
          via: '#cbe0ff',
          to: '#eaf2ff',
        }
      },
      borderRadius: {
        'pill': '9999px',
        'xl': '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'pill': '0 4px 18px rgba(20, 50, 120, 0.07), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'card': '0 8px 30px rgba(20, 45, 100, 0.06)',
        'card-hover': '0 20px 40px rgba(20, 45, 100, 0.12)',
        'mock': '0 12px 32px rgba(20, 45, 100, 0.1)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateX(-6%)' },
          '100%': { transform: 'translateX(14%)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        drift: 'drift 22s ease-in-out infinite alternate',
        driftReverse: 'drift 28s ease-in-out infinite alternate-reverse',
        spinSlow: 'spinSlow 18s linear infinite',
      }
    },
  },
  plugins: [],
}
