/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        masco: {
          primary: 'var(--color-primary)',
          'primary-hover': 'var(--color-primary-hover)',
          secondary: 'var(--color-secondary)',
          'secondary-hover': 'var(--color-secondary-hover)',
          danger: 'var(--color-danger)',
          'danger-hover': 'var(--color-danger-hover)',
          draft: 'var(--color-draft)',
          'draft-hover': 'var(--color-draft-hover)',
          success: 'var(--color-success)',
          'success-hover': 'var(--color-success-hover)',
        }
      }
    },
  },
  plugins: [],
}