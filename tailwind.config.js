module.exports = {
  mode: "jit",
  content: [
    // "./src/assets/styles/**/*.{css}",
    "./src/components/*.{vue,js}",
    "./src/components/**/*.{vue,js}",
    "./src/components/**/**/*.{vue,js}",
    "./src/pages/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/*.{vue,js,ts}",
    "./src/nuxt.config.{js,ts}",
  ],
  theme: {
    // height: {
    //   '115': '28.75rem',
    // },
    extend: {
      blur: {
        'xs': '2px',
      },
      height: {
        '115': '28.75rem',
      },
      padding: {
        '320': '80rem',
      },
      backgroundImage: {
        'logo-dark':
          "url('https://khankhulgun.mn/logo_w.png')",
        'logo-light':
          "url('https://khankhulgun.mn/logo_b.png')",
      },
      colors: {
        'primary_color': '#483285ff',
        'second_color': '#EEA925',
      },
    },
  },
  darkMode: 'class',
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
