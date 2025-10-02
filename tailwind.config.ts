import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-gradient': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config