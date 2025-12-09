/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        blue: {
          css: {
            '--tw-prose-links': '#1d4ed8',
            '--tw-prose-links-hover': '#1e40af',
            '--tw-prose-headings': '#111827',
            '--tw-prose-bold': '#111827',
            '--tw-prose-quotes': '#1e3a8a',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};