const heroPatterns = require('tailwindcss-hero-patterns/src/patterns')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    heroPatterns: {
      topography: heroPatterns.deathstar,
      bubbles: heroPatterns.bubbles,
    },
    extend: {
      animation: {
        'spin-slow': 'spin linear 2000ms',
      }
    },
  },
  plugins: [require('tailwindcss-hero-patterns')],
}
