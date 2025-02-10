import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(1800deg)' }
        }
      },
      animation: {
        'flip': 'flip 1s ease-in-out'
      },
      perspective: {
        '1000': '1000px'
      }
    }
  },
  plugins: []
} satisfies Config;

