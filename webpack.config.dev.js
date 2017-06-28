const webpack = require('webpack');
const path = require('path');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    // 'webpack-hot-middleware/client?path=http://' + 'localhost' + ':' + 3000 + '/__webpack_hmr',
    './client/client.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    alias: {
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, 'client'),
    ],
    extensions: [
      '*',
      '.js',
      '.json',
      '.jsx',
    ],
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.jsx$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },

      { test: /\.css$/, loaders: ['style', 'css-loader'] },
      { 
        test: webpackIsomorphicToolsPlugin.regular_expression('images'), 
        loader: 'url-loader?limit=10240' ,
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              // presets: ['react', ['es2015', { modules: false }], 'stage-0'],
              plugins: ['react-hot-loader/babel'],
              // babelrc: false
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      isBrowser: JSON.stringify(true),
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    webpackIsomorphicToolsPlugin,
  ],
  devtool: 'eval',
};