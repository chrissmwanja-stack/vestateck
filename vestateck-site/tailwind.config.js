/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102C57',
        paper: '#F9FAFB',
        panel: '#FFFFFF',
        panel2: '#F3F4F6',
        forest: '#1D9E75',
        forestSoft: '#0F6E56',
        gold: '#1D9E75',
        goldSoft: '#0F6E56',
        teal: '#1D9E75',
        muted: '#6B7280',
        line: '#E5E7EB',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}