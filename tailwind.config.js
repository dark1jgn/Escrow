/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        cs: '0px 6px 4px 2px #969696',
        btn: 'inset rgba(0, 0, 0, .5) 0px 0px 7px 0px',
      },
      backgroundColor: {
        cs: '#272A2F',
      },
      dropShadow: {
        cs: '0px 6px 4px 2px #969696',
      },
    },
  },
  plugins: [],
}
