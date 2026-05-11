import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'poulber-green': '#13B639',
        'poulber-navy': '#092045',
        'poulber-offwhite': '#F5F8F5',
        'poulber-muted': '#6B7280',
      },
      fontFamily: {
        gilroy: ['var(--font-gilroy)', 'Nunito', 'Inter', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 18s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
