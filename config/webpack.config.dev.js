const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-maps",
  mode: "development",
  entry: [
    path.join(__dirname, "../templates/js/script.dev.js"), // development only script
    path.join(__dirname, "../app/script.js")
  ],
  output: {
    pathinfo: true,
    publicPath: "/",
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      development: true
    }),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../templates/html/index.dev.html")
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
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              sourceMap: true
            }
          },
          {
            loader: require.resolve("sass-loader"),
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      },
      {
        exclude: [/\.scss$/, /\.css$/, /\.js$/, /\.html$/, /\.json$/],
        loader: require.resolve("file-loader")
      }
    ]
  },
  devServer: {
    hot: true,
    noInfo: true,
    open: true,
    overlay: true
  }
};
