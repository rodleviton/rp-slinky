const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const cssFilename = "[name].[contenthash:8].css";

module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: [path.join(__dirname, "../app/script.js")],
  output: {
    path: path.join(process.cwd(), "build"),
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new webpack.DefinePlugin({
      production: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../templates/html/index.build.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          compact: true,
          cacheDirectory: true,
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  }
};
