/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /(bg|text|border|hover:bg|hover:text)-(purple|blue|emerald)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /bg-opacity-(10|20|30|40|50|60|70|80|90|100)/,
    },
    {
      pattern: /text-opacity-(10|20|30|40|50|60|70|80|90|100)/,
    },
  ],
  plugins: [],
};