import AboutUs from "./About Us";
import ATMLocations from "./ATM Locations";
import ContactUs from "./Contact Us";
import Disclosures from "./Disclosures";
import FAQ from "./FAQ";
import Join from "./Join";

const AboutPages = [
  { path: "/about-us", element: <AboutUs /> },
  { path: "/atm-locations", element: <ATMLocations /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/disclosures", element: <Disclosures /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/join", element: <Join /> },
];

export default AboutPages;
