/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  entry: {
    main: "./src/app.tsx",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  mode: 'development',
  output: {
    filename: "[name].[hash].js",
    path:  path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}