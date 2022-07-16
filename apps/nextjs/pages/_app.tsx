import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@pigpile/core";
import { useThemeWithDefaults, colorSchemes, userThemes } from "@pigpile/theme";
import { LayoutBasic } from "components/layouts";
import { wrapper, selectUser } from "../store";
import { useConnectClient } from "../hooks";

function PigpileApp({ Component, pageProps }: AppProps): JSX.Element {
  const { error, user, onLogout } = useConnectClient();
  console.log(
    "useConnectClient returned from hook",
    error || "no error returned"
  );

  const themeWithDefaults = useThemeWithDefaults(
    colorSchemes.colorSchemeBluePink,
    userThemes.farmUserTheme
  );
  const getLayout = Component.getLayout ?? LayoutBasic;
  const onThemeOptionChange = (id, payload) =>
    console.log("theme change", id, payload);

  return (
    <ChakraProvider theme={themeWithDefaults}>
      <CSSReset />
      {error && <div>ERROR: {error}</div>}
      {getLayout(<Component {...pageProps} />, {
        user,
        onLogout,
        onThemeOptionChange,
      })}
    </ChakraProvider>
  );
}

export default wrapper.withRedux(PigpileApp);
