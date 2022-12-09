const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    home: './src/scripts/main.js',
    cashier: '/src/scripts/cashier.js',
    registration: '/src/scripts/registration.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 22142,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      filename: 'index.html',
      template: './src/templates/index.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      title: 'Cashier',
      filename: 'kasir/index.html',
      template: './src/templates/cashier.html',
      chunks: ['cashier'],
    }),
    new HtmlWebpackPlugin({
      title: 'Registration',
      filename: 'registration/index.html',
      template: './src/templates/registration.html',
      chunks: ['registration'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
};
