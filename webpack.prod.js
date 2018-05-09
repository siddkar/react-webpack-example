const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new OptimizeCSSAssetsPlugin({}),
    new CompressionPlugin({ asset: '[path].gz', test: /\.(js|css)$/ })
  ]
});
