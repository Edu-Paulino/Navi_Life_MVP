/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E3A5F', // Azul Profundo
          light: '#2A4D7A',
          dark: '#152A45',
        },
        secondary: {
          DEFAULT: '#8BA888', // Verde Sálvia
          light: '#A3C4A0',
          dark: '#738F70',
        },
        accent: {
          DEFAULT: '#FF6B6B', // Coral Vibrante
          hover: '#FF5252',
        },
        background: {
          DEFAULT: '#F5F5F5', // Cinza Claro
          paper: '#FFFFFF',   // Branco
        },
        text: {
          primary: '#1E3A5F',
          secondary: '#64748B',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(30, 58, 95, 0.05)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
