/* eslint import/no-extraneous-dependencies: 0 import/no-unresolved: 0 */
require('babel-register')({ ignore: /\/(build|node_modules)\// });
// require('babel-register');

var path = require('path');
var rootDir = path.resolve(__dirname, '..');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (__DEVELOPMENT__) {
  if (!require('piping')({
      hook: true,
      ignore: /(\/\.|\/node_modules\/|\/client\/|~$|\.json|\.scss$)/i
    })) {
    return;
  }
}

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools'))
	.server(rootDir, function() {
		// dev middleware needs to have been started by this point or else web-assets.js will not be found
		console.log('Assets file generated.');
	});

__DEVELOPMENT__
  ? require('../server/server.dev.js')
  : require('../server/server.prod.js');

