import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        harmony: 'HarmonyOS Sans SC',
      },
      width: {
        container: '1440px',
      },
      backgroundColor: {
        bg: '#060212',
      },
    },
  },
  plugins: [],
}
export default config
