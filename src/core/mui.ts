import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#F8F8F8",
    },
    primary: {
      main: "#21404F",
    },
    secondary: {
      main: "#F8F8F8",
      light: "#cad2c5",
    },
  },
  typography: {
    fontFamily: `"Inria Sans", sans-serif`,
    h1: {
      fontSize: "3rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 300,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 300,
    },
    h4: {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          boxSizing: "border-box",
        },
      },
    },
  },
});
