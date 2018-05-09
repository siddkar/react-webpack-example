const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    app: `${__dirname}/src/index.jsx`
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.(eot|ttf|woff|woff2|svg|png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './images/**/*', to: './' },
      { from: './robots.txt', to: './' },
      { from: './favicon.ico', to: './' },
      { from: './manifest.json', to: './' }
    ]),
    new webpack.ProvidePlugin({ React: 'react' }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      title: 'Home',
      favicon: 'favicon.ico',
      minify: isProduction
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'index.html',
      title: 'Page Not Found',
      favicon: 'favicon.ico',
      minify: isProduction
    }),
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' })
  ],
  stats: { colors: true },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: `${__dirname}/dist`,
    publicPath: '/'
  }
};
