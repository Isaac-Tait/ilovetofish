/** @type {import('tailwindcss').Config} */
const heroPatterns = require('tailwindcss-hero-patterns/src/patterns')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        eater: ['var(--font-eater)', 'sans-serif'], // Always include a fallback font
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      yellow: colors.yellow,
      teal: colors.teal,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      lime: colors.lime,
      gray: colors.gray,
      neutral: colors.neutral,
      white: colors.white,
      red: {
        900: '#cd112d',
      },
    },
    heroPatterns: {
      bubbles: heroPatterns.bubbles,
    },
    heroPatternsShades: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    heroPatternsColors: ['gray'],
    extend: {
      animation: {
        'spin-slow': 'spin linear 2000ms',
      },
    },
  },
  plugins: [require('tailwindcss-hero-patterns')],
}
