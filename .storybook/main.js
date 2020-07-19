const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(mdx|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-actions',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
