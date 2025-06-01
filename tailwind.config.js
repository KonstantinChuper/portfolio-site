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
        'hero-pattern': "url('/hero-bcg.png')"
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
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.25rem',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          transition: 'all 500ms',
          cursor: 'pointer',
          borderRadius: '0.25rem',
          fontWeight: '500',
          '@media (min-width: 640px)': {
            padding: '0.875rem 1.75rem',
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
          '@media (min-width: 1024px)': {
            padding: '1.25rem 2.5rem',
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          },
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
