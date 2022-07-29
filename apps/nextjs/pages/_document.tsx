// import { ColorModeScript } from "@josulliv101/core";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#000000" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="//fonts.googleapis.com/css?family=Sriracha:400&text=Pigpleongdcaus&display=block"
            rel="stylesheet"
          />
          <link
            href="//fonts.googleapis.com/css?family=Roboto:100,200,300,400.500,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/*<ColorModeScript />*/}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
