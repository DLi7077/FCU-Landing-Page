
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
        <Navbar />
        <Routes>{routeLinks}</Routes>
        <div
          style={{
            position: "relative",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
