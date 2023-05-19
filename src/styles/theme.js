import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#21BF48",
      grey: "#C4C4C4",
      lightGrey: "#F2F2F2",
    },
    text: {
      primary: "#000",
      secondary: "#767676",
      red: "#eb5757",
      grey: "#767676",
    },
    border: {
      primary: "#c4c4c4",
      main: "#21BF48",
    },
    grey: {
      primary: "#f2f2f2",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "white",
          fontSize: "16px",
        },
        outlinedPrimary: {
          color: "#767676",
          border: "1px solid #c4c4c4",
        },
        sizeLarge: {
          height: "60px",
        },
        sizeMedium: {
          height: "56px",
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: "500",
        },
      },
    },
  },

  typography: {
    fontFamily: '"Spoqa Han Sans Neo", sans-serif',

    h1: { fontSize: "36px", lineHeight: "36px", fontWeight: 700 },
    h2: { fontSize: "36px", lineHeight: "36px", fontWeight: 400 },
    h3: { fontSize: "24px", lineHeight: "30px", fontWeight: 700 },
    h4: { fontSize: "18px", lineHeight: "22px", fontWeight: 400 },
    h5: { fontSize: "16px", lineHeight: "22px", fontWeight: 400 },
    h6: { fontSize: "14px", lineHeight: "18px", fontWeight: 400 },
  },
});

export default theme;
