import Document, { Html, Head, Main, NextScript } from "next/document";

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
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
