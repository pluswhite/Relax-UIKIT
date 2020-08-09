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
          {
            loader: require.resolve('react-docgen-typescript-loader'),
            options: {
              // Provide the path to your tsconfig.json so that your stories can
              // display types from outside each individual story.
              tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
              propFilter(prop) {
                if (prop.parent) {
                  return !prop.parent.fileName.includes('node_modules');
                }

                return true;
              },
            },
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
