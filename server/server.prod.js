/* eslint no-console: 0 */
import 'babel-polyfill';

import path from 'path';
import http from 'http';
import express from 'express';
import favicon from 'serve-favicon';

import API from './api.js';
import { renderPage } from './renderReact.jsx';

const app = express();
API(app);

app.use(favicon(path.join(__dirname, '..', 'assets', 'favicon.ico')));
app.use('/public', express.static(path.join(__dirname, '..', 'build', '/public')));

app.use((req, res) => {
  const assets = webpackIsomorphicTools.assets();
  renderPage(req, res, assets);
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  console.error('error : ', err);
  res.status(err.status || 500);
});

const server = http.createServer(app);

server.listen(8080, () => {
  const address = server.address();
  console.log(`Listening on ${address.port}`);
});