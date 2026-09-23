/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        },
        navy: {
          DEFAULT: '#0f172a',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#070b14',
        },
        // Turkish Blue / Turquoise Primary Palette
        turkish: {
          50: '#f0fbfb',
          100: '#d5f7f6',
          200: '#acf0ee',
          300: '#72e4e1',
          400: '#30cfcb',
          500: '#0ea8a4', // Primary Turkish Blue
          600: '#0b8784', // Deep Turkish Blue
          700: '#0c6c6a', // Dark Turkish Blue
          800: '#0f5654',
          900: '#114746',
          950: '#052a2a',
        },
        primary: {
          50: '#f0fbfb',
          100: '#d5f7f6',
          200: '#acf0ee',
          300: '#72e4e1',
          400: '#30cfcb',
          500: '#0ea8a4',
          600: '#0b8784',
          700: '#0c6c6a',
          800: '#0f5654',
          900: '#114746',
          950: '#052a2a',
        },
        gold: {
          50: '#f0fbfb',
          100: '#d5f7f6',
          200: '#acf0ee',
          300: '#72e4e1',
          400: '#30cfcb',
          500: '#0ea8a4',
          600: '#0b8784',
          700: '#0c6c6a',
          800: '#0f5654',
          900: '#114746',
          950: '#052a2a',
        },
        stoneWarm: {
          50: '#faf9f6',
          100: '#f5f3ee',
          200: '#ebe6dd',
          300: '#dbd2c2',
          400: '#c5b8a1',
          500: '#b1a086',
          600: '#98866e',
          700: '#7e6d5a',
          800: '#66594c',
          900: '#544a40',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        'wp': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'wp-card': '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.03)',
        'wp-hover': '0 20px 25px -5px rgba(0,0,0,0.07), 0 8px 10px -6px rgba(0,0,0,0.04)',
      }
    },
  },
  plugins: [],
}
