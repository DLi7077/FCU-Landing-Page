import Homepage from "./Homepage";
import Join from "./Join";
import Overlay from "../Views/Overlay";

const pages = [
  { path: "/", element: <Homepage /> },
  { path: "/join", element: <Join /> },
  { path: "/Elaina", element: <Overlay /> },
];

export default pages;
