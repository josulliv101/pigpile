import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@pigpile/core";
import { userThemes } from "@pigpile/theme";
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
  const getLayout = Component.getLayout ?? LayoutBasic;

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {error && <div>ERROR: {error}</div>}
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default wrapper.withRedux(PigpileApp);
