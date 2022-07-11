import { AppProps } from "next/app";

export default function PigpileApp(appProps: AppProps): JSX.Element {
  return (
    <>
      <Substack {...appProps} />
    </>
  );
}

function Substack({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
