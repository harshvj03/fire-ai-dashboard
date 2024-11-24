import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const getTheme = (mode: string) => {
  if (mode == "light") {
    return lightTheme;
  } else {
    return darkTheme;
  }
};
