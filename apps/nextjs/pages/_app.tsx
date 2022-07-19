import { AppProps } from "next/app";
import {
  ChakraProvider,
  CSSReset,
  localStorageManager,
} from "@josulliv101/core";
import { userThemes } from "@josulliv101/theme";
import { LayoutBasic } from "components/layouts";
import { wrapper } from "../store";
import { useConnectClient, useTheme } from "../hooks";

function PigpileApp({ Component, pageProps }: AppProps): JSX.Element {
  const { error } = useConnectClient();
  console.log(
    "useConnectClient returned from hook",
    error || "no error returned"
  );

  const { theme } = useTheme("", userThemes.farmUserTheme);
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutBasic>{page}</LayoutBasic>);
  console.log("@@Component", Component);
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <CSSReset />
      {error && <div>ERROR: {error}</div>}
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default wrapper.withRedux(PigpileApp);
