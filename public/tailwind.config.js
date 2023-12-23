/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js',
  ],
  theme: {
    container: {
      padding: {
        'DEFAULT': '1.4rem',
        '2xl': '7rem',
      }
      // padding: '1.4rem',
    },
    extend: {
      transitionTimingFunction: {
        'elastic': 'cubic-bezier(.29, 1.01, 1, -0.68)',
      },
      fontFamily: {
        'sans' : "'Work Sans', sans-serif",
        'cascadia':'"CascadiaCode"',
        'montserrat': "'Montserrat', sans-serif",
        'lato': ['Lato'],
        'garamond': ['Garamond']
    },
    spacing:{
      'quarter' : '25%'
    },
    colors:{
      'do-blue-dark': '#080c2d',
      'do-blue-mediumdark': '#1d274c',
      'do-blue-ligth': 'rgb(0, 105, 255)',
      'do-blue-medium': 'rgb(20,86,255)',
      'do-blue-ligther': '#f9fafe',
    },
    boxShadow:{
      'input':'0 5px 1px 0 rgb(0,0,0,0.12)',
      'input-focus':'0 2px 1px 0 rgb(0,0,0,0.12)'
    },
    width:{
      '88':'22rem'
    }
    },
  },
  plugins: [
    
  ],
}

