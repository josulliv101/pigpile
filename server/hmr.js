/* eslint import/no-extraneous-dependencies: 0 import/no-unresolved: 0, no-console: 0 */

const webpack = require('webpack');
const devWebpackConfig = require('../webpack.config.dev.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const HMR = (app) => {
  const compiler = webpack(devWebpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: devWebpackConfig.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    contentBase: 'http://' + 'localhost' + ':' + 3000,
    quiet: false,
    noInfo: false,
    hot: true,
    inline: true,
    lazy: false,
    headers: {'Access-Control-Allow-Origin': '*'},
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    reload: true,
  }));

  return app;
};

export default HMR;