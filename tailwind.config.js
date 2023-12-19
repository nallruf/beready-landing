/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./**/*.{html,js}", ],
  theme: {
    colors:{
      primary: {
        100: '#FFFAEA',
        200: '#FAEAB1',
        300: '#E5BA73',
        400: '#DAA667',
        500: '#C58940',
      },
      neutral: {
        0: '#FFFFFF',
        50: '#F5F5F5',
        200: '#D3D3D3',
        300: '#AFAFAF',
        600: '#343434',
        800: '#202020',
      },
      success: {
        100: '#E6F7E6',
        200: '#C2EAC2',
        300: '#8EDC8E',
        600: '#4CAF50',
        800: '#388E3C',
      },
      danger: {
        100: '#FFA494',
        200: '#ED8383',
        300: '#F44848',
        600: '#EC2525',
        800: '#AE0000',
      },
    },

    extend: {
      spacing: {
        '0.5': '4px',
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '32px',
        '2xl': '128px',
        '3xl': '360px',
      }
    },
  },
  plugins: [],
}

