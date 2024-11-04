import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#A9A9A9",
    },
    secondary: {
      main: "#98FB98",
    },
  },

  typography: {
    fontFamily: ['"Segoe UI Emoji"'].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
