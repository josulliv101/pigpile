import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta
            content="#000000"
            name="theme-color"
          />
          <link
            href="/favicon.ico"
            rel="icon"
            type="image/png"
          />
          <link
            href="https://fonts.googleapis.com"
            rel="preconnect"
          />
          <link
            crossOrigin="true"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          <link
            href="//fonts.googleapis.com/css?family=Sriracha:400&text=Pigpleongdcaus&display=block"
            rel="stylesheet"
          />
          <link
            href="//fonts.googleapis.com/css?family=Roboto:100,200,300,400.500,600,700&display=swap"
            rel="stylesheet"
          />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
