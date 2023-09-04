/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      mobile: '340px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      zIndex: {
        100: '100',
        max: '999999'
      },
      height: {
        128: '36rem',
        600: '600px'
      },
      backgroundImage: {
        hero: "url('../public/images/hero.jpeg')"
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography')
  ]
}
