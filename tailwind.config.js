const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          "wa-bg-loginAndSignup": "#F5F5FA",
          "wa-bg-general": "#FFFFFF",
          "wa-input-bg": "#F2F4FB",
          "wa-active-text": "#240C40",
          "wa-generalGreen": "#00C9B6",
          "wa-sideBar-bg": "#e5e5e5",
          "wa-muted-text": "#716E89;",
          "wa-placeholder-color": '#7b7b9f',
          "wa-purple-text-color": "#532d94",
          "wa-paragraph-text-color": "#40344e",
          "wa-border-box-color": "#DFE4F4",
          "wa-border-top-color": "#ffc200",
          "wa-orangish-color": '#e93c3c'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
