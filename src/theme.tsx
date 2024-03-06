import { ThemeOptions } from "@material-ui/core/styles/createTheme";

export const colors = {
  // primary: "#1D3557",
  primary: "#1D3557",
  secondary: "#F2F2F2",
  tertiary: "#A8DADC",
  background: "#1D3557", // dark blue
  // background: "#5a7597",
  highlight: "#334B6F",
  alert: "#E63946",
  greyLight: "#858585",
  white: "#FFFFFF",
  link: "#51A6FF",
};

export const MOBILE_NAV_BREAKPOINT = 1100;

//6c8ab8

export const themeOptions: ThemeOptions = {
  palette: {
    // primary: {
    //   main: '#3f51b5',
    // },
    // secondary: {
    //   main: '#f50057',
    // },
    primary: {
      main: "#ffaf00",
    },
    secondary: {
      main: "#973700",
    },
    background: {
      // default: "#1d3557", // dark blue
      // paper: "#334b6f", // light blue
      default: "#210002",
      // paper: "#a34300",
      paper: "#5c1715",
    },
    text: {
      // primary: "#ffffff", // white
      primary: "#ffaf00",
    },
  },
  typography: {
    fontFamily: "Times New Roman",
  },
};
