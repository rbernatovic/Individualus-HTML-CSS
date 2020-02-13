const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images',
          publicPath: '../images',
          name: '[name].[ext]',
        },
      },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'about',
      filename: 'about.html',
      template: './src/about.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'services',
      filename: 'services.html',
      template: './src/services.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'plans',
      filename: 'plans.html',
      template: './src/plans.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'contact',
      filename: 'contact.html',
      template: './src/contact.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'blog',
      filename: 'blog.html',
      template: './src/blog.hbs'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/app.css',
    }),
  ]
};