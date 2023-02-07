import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  content: [
    './layouts/**/*.{html,js,ts,vue}',
    './pages/**/*.{html,js,ts,vue}',
    './components/**/*.{html,js,ts,vue}',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
      },
    },
  },
  daisyui: {
    themes: ['forest'],
  },
};
