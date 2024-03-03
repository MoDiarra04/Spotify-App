import "./App.css";
import ResponsiveAppBar from "./Components/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

function App() {
  const Theme = createTheme({
    palette: {
      primary: {
        main: "#191414",
      },
      secondary: {
        main: "#1DB954",
      },
    },
    typography: {
      fontSize: 16,
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <div className="App">
          <ResponsiveAppBar />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
