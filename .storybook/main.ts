module.exports = {
  core: { builder: 'webpack5', disableTelemetry: true },
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '../packages/Theme/src/storybook-addon/register',
  ],
  framework: '@storybook/react',
  staticDirs: ['../storybook-static'],
};
