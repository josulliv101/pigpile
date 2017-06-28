/* eslint import/no-extraneous-dependencies: 0 import/no-unresolved: 0, no-console: 0 */
import http from 'http';
import httpProxy from 'http-proxy';
import PrettyError from 'pretty-error';
import {apiHost, apiPort} from '../config/main';

const pretty = new PrettyError();
const targetUrl = `http://${apiHost}:${apiPort}`;
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true,
});

console.log('target', targetUrl);

const API = (app) => {

  const server = new http.Server(app);

  // Proxy to API server
  app.use('/api', (req, res) => {
    proxy.web(req, res, {target: targetUrl});
  });

  // added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
  proxy.on('error', (error, req, res) => {
    let json;
    if (error.code !== 'ECONNRESET') {
      console.error('proxy error', error);
    }
    if (!res.headersSent) {
      res.writeHead(500, {'content-type': 'application/json'});
    }
    json = {error: 'proxy_error', reason: error.message};
    res.end(JSON.stringify(json));
  });

  return app;
};

export default API;