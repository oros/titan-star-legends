const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    hotOnly: true,
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
  },
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
            }
          },
          "sass-loader",
        ]
      }
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
    extensions: [".js", ".ts", ".tsx"]
  },
};
