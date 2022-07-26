import Homepage from "./Homepage";
import Join from "./About/Join";
import Overlay from "../Views/Overlay";
import AboutUs from "./About/About Us";

const pages = [
  { path: "/", element: <Homepage /> },
  { path: "/join", element: <Join /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/Elaina", element: <Overlay /> },
];

export default pages;
