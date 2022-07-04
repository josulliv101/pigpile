import { mode, Styles } from "@chakra-ui/theme-tools"

const styles: Styles = {
  global: (props) => ({
    body: {
      overflowX: "hidden",
      _light: {
        bgColor: "gray.50",
      }
    },
    "#__next": {
      display: "flex",
      flexDirection: "column",
      h: "100vh",
      // h: "-webkit-fill-available",

      ">main": {
        flexGrow: 1,
      }
    }
  }),
}

export default styles