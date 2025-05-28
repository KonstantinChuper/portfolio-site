/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#55e6a5',
        colorMenu: '#0e1319',
        colorMenuTop: '#151c25',
        colorWhite: '#ffffff',
        colorBlack: '#02050a',
        colorTextSecondary: '#a2a2a2',
        colorBtnBorder: '#1f2937'
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        handjet: ['Handjet', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/hero-bcg.png')"
      },
      width: {
        550: '550px'
      },
      scale: {
        250: '2.5'
      },
      gridTemplateColumns: {
        15: 'repeat(15, minmax(0, 1fr))'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1.25rem 2.5rem',
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          transition: 'all 500ms',
          cursor: 'pointer',
          marginTop: '2rem',
          '&-primary': {
            backgroundColor: theme('colors.colorPrimary'),
            color: theme('colors.colorBlack'),
            '&:hover': {
              backgroundColor: theme('colors.colorMenuTop'),
              color: theme('colors.colorWhite')
            }
          },
          '&-secondary': {
            backgroundColor: theme('colors.colorMenu'),
            color: theme('colors.colorWhite'),
            border: '1px solid #1f2937',
            '&:hover': {
              borderColor: theme('colors.colorPrimary')
            }
          }
        }
      })
    })
  ]
}
