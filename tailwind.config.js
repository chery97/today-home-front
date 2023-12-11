/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
    "./src/Component/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      width: {
        '112px': '112px',
        '270px': '270px',
        '944px': '944px'
      },
      height: {
        '30px': '30px',
        '51px': '51px',
        '480px': '480px',
      },
      textColor: {
        'sky-blue': '#35C5F0'
      },
      colors: {
        'sky-blue': '#35C5F0',
        'sky-blue-hover': '#009FCE',
        'tit-black': '#2F3438',
      },
      borderColor: {
        'sky-blue': '#35C5F0',
      },
      padding: {
        '6px' : '6px',
        '12px' : '12px'
      }
    }
  },
  plugins: [],
}

