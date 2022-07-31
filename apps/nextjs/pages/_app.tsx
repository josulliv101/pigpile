import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChakraProvider, CSSReset, localStorageManager } from "@josulliv101/core";
import { userThemes } from "@josulliv101/theme";
import { LayoutBasic } from "components/layouts";
import { appSlice, selectAppState, wrapper } from "store";
import { useConnectClient, useStatusManager, useTheme } from "hooks";
import * as ga from "../analytics";

function PigpileApp({ Component, pageProps }: AppProps): JSX.Element {
  const { error } = useConnectClient();
  const { isUnloading, isMobileNavOpen } = useSelector(selectAppState());
  const router = useRouter();
  const dispatch = useDispatch();
  useStatusManager();

  console.log("useConnectClient returned from hook", error || "no error returned");

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
    };
    const handleStop = (url) => {
      if (isMobileNavOpen) {
        setTimeout(() => dispatch(appSlice.actions.closeMobileNav()), 0);
      }
      ga.pageview(url);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

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
      {/*<ToastContainer />*/}
    </ChakraProvider>
  );
}

export default wrapper.withRedux(PigpileApp);
