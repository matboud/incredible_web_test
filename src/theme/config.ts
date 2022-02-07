import { DefaultTheme } from "styled-components";

{
  /* 
    to order to keep the good UI principles 
    i decided to go  with only three colors
    [black, red, yellow]. 
  */
}
const theme: DefaultTheme = {
  fonts: {
    size: {
      xs: "0.7em",
      sm: "0.8125em",
      sm2: "0.938em",
      base: "1em",
      lg: "1.125em",
      xl: "1.25em",
      xl2: "1.4em",
      xl3: "1.5em",
      xl4: "1.875em",
      xl5: "2.25em",
      xl6: "2.5em",
      xl7: "3em",
      xl8: "3.125em",
      xl9: "3.175em",
      xl10: "4em",
      xl11: "4.2em",
    },
  },
  colors: {
    white: {
      100: "#fff",
    },
    black: {
      100: "#d5d5d7",
      300: "#5a5b64",
      500: "#2c2d33",
      600: "#1c1c1c",
      700: "#191b1e",
    },
    red: {
      500: "#d13026",
    },
    yellow: {
      500: "#f0c421",
    },
  },
};

export default theme;
