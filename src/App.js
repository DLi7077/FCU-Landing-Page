import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./Pages";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import { createTheme, ThemeProvider } from "@mui/material";
import "./Pages/layout.css";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#841ca1",
      darker: "#5f0079",
    },
    secondary: {
      main: "#a22dc2",
      light: "#b345d1",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function App() {
  const NAVBAR_HEIGHT = "64px";
  const routeLinks = Pages.map((page, idx) => {
    return <Route key={idx} path={page.path} element={page.element} />;
  });

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <ScrollToTop />
            <div style={{ height: NAVBAR_HEIGHT }} />
            <Navbar />
            <Routes>{routeLinks}</Routes>
          </div>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
