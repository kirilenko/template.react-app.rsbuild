import { StorybookConfig } from 'storybook-react-rsbuild'

/** @type { import('@storybook/react').StorybookConfig } */
const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],

  framework: 'storybook-react-rsbuild',

  rsbuildFinal: (config) => {
    // Customize the final Rsbuild config here
    return config
  },

  // staticDirs: ['../public'],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  docs: {},
}

export default config
