import Homepage from "./Homepage";
import Join from "./About/Join";
import AboutUs from "./About/About Us";
import ATMLocations from "./About/ATM Locations";
import FAQ from "./About/FAQ";
import ContactUs from "./About/Contact Us";

const pages = [
  { path: "/", element: <Homepage /> },
  { path: "/join", element: <Join /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/atm-locations", element: <ATMLocations /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/contact-us", element: <ContactUs /> },
];

export default pages;
