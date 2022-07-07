import { Styles } from "@pigpile/core";

const styles: Styles = {
  global: (props) => ({
    body: {
      overflowX: "hidden",
      _light: {
        bgColor: "gray.50",
      },
    },
    "#__next": {
      display: "flex",
      flexDirection: "column",
      h: "100vh",
      // h: "-webkit-fill-available",

      ">main": {
        flexGrow: 1,
      },
    },
    "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:focus-within,input:-webkit-autofill:active":
      {
        backgroundColor: "#4a5568 !important;",
        boxShadow: "0 0 0 30px #4a5568 inset !important",
        textFillColor: "white !important",
      },
  }),
};

export default styles;
