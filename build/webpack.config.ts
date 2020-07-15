import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // Create `style` nodes from JS strings
          'css-loader', // Translates CSS into CommonJJS
          'sass-loader', // Complies Sass to CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};

export default config;
