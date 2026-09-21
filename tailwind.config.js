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
        gold: {
          50: '#fdfbf7',
          100: '#f9f4ea',
          200: '#f2e5cb',
          300: '#e7cf9d',
          400: '#d7b366',
          500: '#c59b38',
          600: '#ad8029',
          700: '#896022',
          800: '#714e21',
          900: '#5e4120',
          950: '#37230e',
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
