/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        velvet: {
          900: '#1C0A10',
          800: '#2A1018',
          700: '#3A1A24',
          600: '#4E2533',
        },
        cream: '#F6EDE1',
        marquee: '#E8A33D',
        blush: '#D98B9A',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(0, 0, 0, 0.9)',
      },
      maxWidth: {
        shell: '1180px',
      },
    },
  },
  plugins: [],
}
