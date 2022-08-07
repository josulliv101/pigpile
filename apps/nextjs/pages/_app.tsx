import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ChakraProvider, CSSReset, localStorageManager } from "@josulliv101/core";
import { LayoutBasic } from "components/layouts";
import { wrapper } from "store";
import { useRouteChangeListeners, useStatusListenererMiddleware, useTheme } from "hooks";

export type Page<P> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function PigpileApp({ Component, pageProps }: Props): JSX.Element {
  useStatusListenererMiddleware();
  const { isUnloading } = useRouteChangeListeners();
  const { theme } = useTheme();
  const getLayout = Component.getLayout ?? ((page) => <LayoutBasic>{page}</LayoutBasic>);

  if (isUnloading) {
    return <div />;
  }

  return (
    <ChakraProvider
      colorModeManager={localStorageManager}
      theme={theme}
    >
      <CSSReset />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default wrapper.withRedux(PigpileApp);
