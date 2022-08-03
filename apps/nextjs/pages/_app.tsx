import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ChakraProvider, CSSReset, localStorageManager } from "@josulliv101/core";
import { LayoutBasic } from "components/layouts";
import { wrapper } from "store";
import { useConnectClient, useRouteChangeListeners, useStatusManager, useTheme } from "hooks";

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function PigpileApp({ Component, pageProps }: Props): JSX.Element {
  const { error } = useConnectClient();
  const { isUnloading } = useRouteChangeListeners();
  useStatusManager();

  const { theme } = useTheme();
  const getLayout = Component.getLayout ?? ((page) => <LayoutBasic>{page}</LayoutBasic>);

  if (isUnloading) {
    return <div />;
  }

  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <CSSReset />
      {error && <div>ERROR: {error}</div>}
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default wrapper.withRedux(PigpileApp);
