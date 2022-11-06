/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',

        'xs/2': '0.125rem',
        'sm/2': '0.25rem',
        'md/2': '0.375rem',
        'lg/2': '0.5rem',
        'xl/2': '0.75rem',
      },
      fontSize: {
        md: ['1rem', '1.5rem'],
      },
    },
  },
  plugins: [],
};
