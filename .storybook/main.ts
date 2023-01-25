import { Configuration } from 'webpack';

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
  webpackFinal: async (config: Configuration) => {
    if (!config.module) {
      return config;
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: [/\.svg$/i],
            use: [
              {
                loader: 'raw-loader',
                options: {
                  esModule: false,
                },
              },
            ],
          },
          {
            test: [/\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/],
            use: {
              loader: require.resolve('file-loader'),
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          },
          // @ts-ignore
          ...config.module.rules,
        ],
      },
    ]

    return config
  },
};
