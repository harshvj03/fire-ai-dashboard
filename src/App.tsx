import { Box, CssBaseline } from "@mui/material";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { ThemeProvider } from "@emotion/react";
import { getTheme } from "./app/theme/theme";
import { useSelector } from "react-redux";
import { RootState } from "./app/store/store";

function App() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = getTheme(mode);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex" }}>
          <div style={{ minWidth: "250px" }}>
            <Sidebar />
          </div>
          <Box sx={{ ml: "4px", width: "100%" }}>
            <Header />
            <MainContent />
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
