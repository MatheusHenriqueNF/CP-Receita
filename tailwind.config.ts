import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // ← ativa o modo escuro por classe
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
