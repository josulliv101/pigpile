import { Styles } from "@josulliv101/core";

const styles: Styles = {
  global: () => ({
    body: {
      overflowX: "hidden",
      _light: {
        bgColor: "gray.50",
      },
    },
    "#__next, #root": {
      display: "flex",
      flexDirection: "column",
      h: "100vh",

      ">main": {
        flexGrow: 1,
      },
    },
    "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:focus-within,input:-webkit-autofill:active":
      {
        backgroundColor: "#666 !important;",
        boxShadow: "0 0 0 30px #666 inset !important",
        textFillColor: "white !important",
      },
  }),
};

export default styles;
