const defaultSansFonts = [
  '"ui-sans-serif"',
  '"system-ui"',
  '"-apple-system"',
  '"BlinkMacSystemFont"',
  '"Segoe UI"',
  '"Roboto"',
  '"Helvetica Neue"',
  '"Arial"',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"'
];

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}', './content/**/*.{svelte,md,svx}'],
  theme: {
    extend: {
      fontFamily: { display: ['"Plus Jakarta Sans"', ...defaultSansFonts] }
    },
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...defaultSansFonts]
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
