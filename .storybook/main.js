const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(mjs|jsx?|tsx?)$/,
      exclude: /node_modules/,
    });
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  }
};
