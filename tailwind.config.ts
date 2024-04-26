import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      bcHead: {
        red:'#d1fae5',
      },
      C:{
        Blue:"rgb(91,32,240)",
        Gray:'#808080',
        Lgray:"#F5F6FA",
        Bviolet:'blueviolet',
        Yellow:'rgb(255, 219, 76)',
        BgNav:'#98F5F9',
        Btn1:'#DFB81C',
        BlackV:'#26004d'
      }
    },
  },
  plugins: [],
}
export default config
