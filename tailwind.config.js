/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/data/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#172026',
        paper: '#f7f4ee',
        mist: '#e8edf0',
        signal: '#d45b3f',
        orbit: '#27758f',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(23, 32, 38, 0.12)',
      },
    },
  },
  plugins: [],
};
