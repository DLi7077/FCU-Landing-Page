import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./Pages";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const routeLinks = Pages.map((page, idx) => {
    return <Route key={idx} path={page.path} element={page.element} />;
  });

  return (
    <>
      <Router>
        <div style={{ height: "60px" }} />
        <Navbar />
        <Routes>{routeLinks}</Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
