const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  entry: "./client/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
        test: /\.(js|jsx)$/,
      },
      {
        exclude: /(node_modules)/,
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: { extensions: ["*", ".js", ".jsx"] },
};
