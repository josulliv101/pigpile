/* eslint no-console: 0 */
import 'babel-polyfill';

import http from 'http';
import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';

import API from './api.js';
import HMR from './hmr.js';
import { renderPage } from './renderReact.jsx';

const app = express();
API(app);
HMR(app);

app.use(favicon(path.join(__dirname, '..', 'assets', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, '..', 'static')));

app.get('*', (req, res) => {
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }
  const assets = webpackIsomorphicTools.assets();
  renderPage(req, res, assets);
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
});

const server = http.createServer(app);

server.listen(3000, () => {
  const address = server.address();
  console.log(`Listening on ${address.port}.`);
});