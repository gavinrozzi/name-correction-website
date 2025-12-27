/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f97316',
          hover: '#ea580c',
          light: '#fed7aa',
        },
        secondary: {
          DEFAULT: '#14b8a6',
          hover: '#0d9488',
          light: '#99f6e4',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Fira Sans', 'system-ui', 'sans-serif'],
        mono: ['Fira Mono', 'Monaco', 'monospace'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};