import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
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
        test: /\.ts(x)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Create `style` nodes from JS strings
          "css-loader", // Translates CSS into CommonJJS
          "sass-loader", // Complies Sass to CSS
        ],
      },
    ]
  }
}

export default config