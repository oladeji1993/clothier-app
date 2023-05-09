/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  variants: {
      display:['group-hover']
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1408px',
        '2xl': '1408px',
      },
      padding: {
        // DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '2rem',
        '2xl': '0rem',
      },
    },
    // extend: {
    //   colors: {
    //     deepRed: '#DA3636',
    //   },
    //   fontFamily: {
    //     ConconBold: ['Concon-bold'],
    //     ConconRegular: ['Concon-regular'],
    //     centuryGothic: ['centuryGothic'],
    //   },
    // },
  },
  plugins: [],
}



