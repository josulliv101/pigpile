import { AppProps } from "next/app";
// import {Provider} from 'react-redux';
import { ChakraProvider, CSSReset } from "@pigpile/core";
import { useThemeWithDefaults, colorSchemes, userThemes } from "@pigpile/theme";
import { LayoutBasic } from "components/layouts";
import { wrapper } from "../store";

function PigpileApp({ Component, pageProps }: AppProps): JSX.Element {
  const themeWithDefaults = useThemeWithDefaults(
    colorSchemes.colorSchemeBluePink,
    userThemes.farmUserTheme
  );
  const onThemeOptionChange = (id, payload) =>
    console.log("theme change", id, payload);
  const getLayout = Component.getLayout ?? LayoutBasic;
  console.log("pageProps", pageProps);
  return (
    <ChakraProvider theme={themeWithDefaults}>
      <CSSReset />
      {getLayout(<Component {...pageProps} />, { onThemeOptionChange })}
    </ChakraProvider>
  );
}

export default wrapper.withRedux(PigpileApp);
