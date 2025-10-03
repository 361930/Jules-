import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8A2BE2',
        'dark-purple': '#4B0082',
        'light-purple': '#E6E6FA',
        'brand-black': '#121212',
      },
      backgroundImage: {
        'main-gradient': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config