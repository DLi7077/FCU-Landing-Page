import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./Pages";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#91009e",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function App() {
  const routeLinks = Pages.map((page, idx) => {
    return <Route key={idx} path={page.path} element={page.element} />;
  });

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <ScrollToTop />
            <div style={{ height: "60px" }} />
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
