const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    hotOnly: true,
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
  },
  devtool: "source-map",
  entry: "./client/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "ts-loader",
        test: /\.ts(x?)$/,
      },
      {
        enforce: "pre",
        loader: "source-map-loader",
        test: /\.js$/,
      },
      {
        exclude: /(node_modules)/,
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              url: true,
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        exclude: /(node_modules)/,
        loader: "file-loader",
        test: /\.(png)$/,
      },
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      "assets": path.resolve(__dirname, 'client/assets/'),
      "components": path.resolve(__dirname, 'client/components/'),
      "foundation": path.resolve(__dirname, 'client/foundation/'),
      "styles": path.resolve(__dirname, 'client/styles/'),
      "types": path.resolve(__dirname, 'client/types/'),
    },
    extensions: [".js", ".ts", ".tsx"]
  },
};
