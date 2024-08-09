/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Rubik', 'system-ui'],
      serif: ['Rubik', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      body: ['"Rubik"', 'Font Awesome'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['business', 'corporate'],
  },
};
