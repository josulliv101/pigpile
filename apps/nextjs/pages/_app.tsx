import { AppProps } from "next/app";
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@pigpile/core";
import { useThemeWithDefaults, colorSchemes, userThemes } from "@pigpile/theme";
import { LayoutBasic } from "components/layouts";

export default function PigpileApp(appProps: AppProps): JSX.Element {
  return (
    <>
      <Substack {...appProps} />
    </>
  );
}

function Substack({ Component, pageProps }: AppProps): JSX.Element {
  const themeWithDefaults = useThemeWithDefaults(
    colorSchemes.colorSchemeBluePink,
    userThemes.farmUserTheme
  );
  const getLayout = Component.getLayout ?? LayoutBasic;
  return (
    <ChakraProvider theme={themeWithDefaults}>
      <CSSReset />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
