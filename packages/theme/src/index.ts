import { extendTheme } from "@pigpile/core";
import components from "./components";
import foundations from "./foundations";
import styles from "./styles";

const theme = extendTheme({
  components,
  ...foundations,
  styles,
});

export default theme;
