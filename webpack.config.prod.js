const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

const config = require('./config/main');

module.exports = function (env) {
  const webpackConfig = {
    entry: {
      app: [
        './client/client.jsx',
      ],
      vendor: [
        'babel-polyfill',
        'react',
        'react-dom',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'public/[name].[chunkhash].js',
      publicPath: '/',
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
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader',
          }),
        },
        { test: /\.gql(\?.*)?$/, loader: 'raw-loader' },
        { 
          test: webpackIsomorphicToolsPlugin.regular_expression('images'), 
          loader: 'url-loader?name=public/img/[name].[ext]&limit=10240' ,
        },
        { test: /\.json$/, loader: 'json-loader' },
        {
          test: /\.(eot|ttf|woff|woff2|svg)$/,
          loader: 'file?name=public/fonts/[name].[ext]',
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new ManifestPlugin(),
      new CleanWebpackPlugin(['build']),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
      }),
      new webpack.DefinePlugin({
        isBrowser: JSON.stringify(false),
        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: false,
        __DEVTOOLS__: true,
        __env: JSON.stringify(),
        'process.env': {
          // This has effect on the react lib size
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new ExtractTextPlugin('public/bundle.[contenthash].css'),
      new webpack.optimize.CommonsChunkPlugin({
          names: ['vendor', 'manifest']
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      webpackIsomorphicToolsPlugin,
    ],
    devtool: 'source-map',
    stats: {
      children: false,
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
  };

  return webpackConfig;
};