/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [],
};
