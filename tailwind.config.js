/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      smd: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'filled-btn': "url('assets/Register%20Button%20(1).svg')",
        'bubbles': "url('assets/Clip%20path%20group.svg')",
        'africa': "url('assets/africa%202%20(1).svg')",
        'hero': "url('assets/hero_bg.svg')",
        'hero2': "url('assets/group_photo_2.jpg')",
        'random': "url('assets/random_bg.svg')",
        'group_photo' : "url('assets/hacks.jpg')"
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'IBM': ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        amber: {
          '50': '#FDF7E7',
          '100': '#FCEFBF',
          '200': '#F8E489',
          '300': '#F4DC7B',
          '400': '#E3C05C',
          '500': '#D4B661',
          '600': '#CE9E4B',
          '700': '#C9AE5F',
          '800': '#C1A256',
          '900': '#BB9348',
        },
        bronze: {
          '50': '#FDF3E5',
          '100': '#FCE2BC',
          '200': '#F9C08F',
          '300': '#F4B38A',
          '400': '#ED9B6B',
          '500': '#EEBA7B',
          '600': '#C48143',
          '700': '#B66F32',
          '800': '#9B5A26',
          '900': '#7D451D',
        },
        gold : "#E85C0D"
      },
    },
  },
  plugins: [require("daisyui")],
}

