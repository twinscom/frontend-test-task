const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {
  const isProduction = env === 'production',
      webpack = require('webpack'),
      CleanWebpackPlugin = require("clean-webpack-plugin"),
      chunkFileName = "chunks/" + (!isProduction ? "[name]." : "") + "[chunkhash].js";

  return {

    entry: {
        app: ['babel-polyfill', './src/js/app.js']
    },
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: "[name].bundle.js",
      chunkFilename: chunkFileName,
      publicPath: "/public/dist/"
    },
    mode: env ? env : "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:{
            loader: "babel-loader",
            options: {
              presets: ["env", "react"],
              plugins: [
                "transform-class-properties",
                "transform-object-rest-spread",
                "babel-plugin-styled-components",
                "syntax-dynamic-import"
              ]
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            // !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(eot|woff2|woff|ttf|svg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                  publicPath: "./../../",
                  name: '[path][name].[ext]',
                  emitFile: false
                  // useRelativePath: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: '[name].css',
      }),
      new CleanWebpackPlugin(["public/dist/chunks/*.*", "public/dist/*.*"],
      {
        verbose: true,
        dry: !isProduction,
        allowExternal: true
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '/'),
      historyApiFallback: true,
      publicPath: '/public/dist/',
    },
    optimization: {
        splitChunks: {
            name: !isProduction
        }
    }
  };
};