// import { Children } from "react";
import "./App.css";
import Root from "./Components/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoot from "./Components/Home/HomeRoot";
import AboutUs from "./Components/Aboutus/AboutUs";
import ArtistsRoot from "./Components/Artists/ArtistsRoot";
import AftercareRoot from "./Components/AfterCare/AftercareRoot";
import Faq from "./Components/Faq/Faq";
// import Contactus from "./Components/ContactUs/Contactus";
import ContatRoot from "./Components/ContactUs/ContatRoot";
import ArtistProfiles from "./Components/Artists/ArtistProfiles";
import AcademyRoot from "./Components/Academy/AcademyRoot";

let router = createBrowserRouter([
  {
    path: `/`,
    element: <Root />,
    children: [
      { index: true, element: <HomeRoot /> },
      { path: `/home`, element: <HomeRoot /> },
      { path: `/aboutus`, element: <AboutUs /> },
      { path: `/artists`, element: <ArtistsRoot /> },
      { path: `/aftercare`, element: <AftercareRoot /> },
      { path: `/faq`, element: <Faq /> },
      { path: `/AcademyRoot`, element: <AcademyRoot /> },
      { path: `/ContatRoot`, element: <ContatRoot /> },
      { path: `/ArtistProfiles`, element: <ArtistProfiles /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
