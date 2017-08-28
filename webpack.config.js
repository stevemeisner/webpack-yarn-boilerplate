const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    vendor: ['d3'], // replace with any libs you may need
    // contact: './contact.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    publicPath: '/assets',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['env'] },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
            'postcss-loader',
            { loader: 'sass-loader', options: {} },
          ],
        }),
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'common.js',
      minChunks: 2,
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
};
