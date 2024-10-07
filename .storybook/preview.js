import {
  // withThemeByClassName, // https://storybook.js.org/recipes/tailwindcss#31-toggle-themes-by-class-name
  withThemeByDataAttribute,
} from '@storybook/addon-themes'
import '../src/app/app.css'

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    attributeName: 'data-mode',
  }),
]

// Configures Storybook to log the actions (ActionsData) in the UI:
/** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// }
//
// export default preview
