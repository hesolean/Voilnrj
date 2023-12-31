/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'blue': 'rgb(14 165 233)',
      'darkblue': 'rgb(3 105 161)',
      'lightblue': 'rgb(125 211 252)',
      'black': 'rgb(2 6 23)',
      'gray': 'rgb(100 116 139)',
      'red': 'rgb(190 18 60)',
      'light': 'rgb(240 240 240)',
      'green': 'rgb(14 165 33)'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      title: ['Rubik Iso']
    },
    extend: {},
  },
  plugins: [],
}

