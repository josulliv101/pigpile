import React from 'react';

const Helmet = require('react-helmet');

const config = require('../../config/main');

type Props = {
  markup: string,
  store: Object,
  assets: Object,
};

const Html = (props: Props) => {
  const head = Helmet.rewind();
  const { markup, store, assets: {javascript, styles, assets}, stylesSheets } = props;

  // Ensure order of scripts. 'main' is for dev.
  const renderScripts = ['manifest', 'vendor', 'app', 'main'].map((key, i) =>
    javascript[key] && <script src={javascript[key]} key={key} />
  );

  const renderStyle = stylesSheets && <style id="server-side-styles" dangerouslySetInnerHTML={ { __html: stylesSheets } } />;

  const initialState = (
    <script
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: `window.__INITIAL_STATE__=${JSON.stringify(store ? store.getState() : {})};`,
      }}
      charSet="UTF-8"
    />
  );

  return (
    <html lang="en">
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        { renderStyle }
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <main
          id="app"
          dangerouslySetInnerHTML={{ __html: markup }} // eslint-disable-line react/no-danger
        />
        {initialState}
        {renderScripts}
      </body>
    </html>
  );
};

export default Html;
