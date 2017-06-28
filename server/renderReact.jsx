/* eslint import/no-extraneous-dependencies: 0, import/no-unresolved: 0,
react/jsx-closing-bracket-location: 0 */
import fs from 'fs';
import { basename, join } from 'path';
import 'isomorphic-fetch';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
// import { ServerRouter } from 'react-router';
import { StaticRouter } from 'react-router';
import { createMemoryHistory } from 'history';

import configureStore from '../client/store';
import { Html } from '../client/components';
import App, {styleManager} from '../client/app';
import rootSaga from '../client/sagas';
import ApiClient from '../utils/ApiClient';

const renderHTML = (markup, store, assets, stylesSheets) => {
  const html = renderToStaticMarkup(
    <Html markup={markup} store={store} assets={assets} stylesSheets={stylesSheets} />
  );
  return `<!DOCTYPE html>${html}`;
};

export function renderPage(req, res, builtAssets) {
  // Need starting router:location:pathanme to be correct so doesn't redirect on load
  const history = createMemoryHistory({ initialEntries: [req.originalUrl] });
  const store = configureStore({}, history);
  const context = {}; //createServerRenderContext();
  const apiClient = new ApiClient(req);

  const rootComp = (
    <App
      context={context}
      location={req.originalUrl}
      router={StaticRouter}
      store={store}
      history={history}
    />
  );

  // When first render is done and all saga's are run, render again with updated store.
  store.runSaga(rootSaga, apiClient).done.then(() => {
    const markup = renderToString(rootComp);

    const stylesSheets = styleManager.sheetsToString();
    const html = renderHTML(markup, store, builtAssets, stylesSheets);
    console.log('@@@', req.originalUrl, context.location);
    // html = html.replace('"pathname":"/"', '"pathname":"/movies"');
    // const result = context.getResult && context.getResult() || {};
    if (context.url) {

      res.redirect(302, context.url);
    } 
    else {
      // console.log('markup', req.originalUrl, html);
      res.status(200).send(html);
    }
  });

  // Do first render, starts initial actions.
  renderToString(rootComp);

  // When the first render is finished, send the END action to redux-saga.
  store.close();

}
