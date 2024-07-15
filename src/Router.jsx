import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ApartmentPage from "./Pages/ApartmentPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ErrorPageNotFound from "./Pages/ErrorPageNotFound.jsx";
import About from "./Pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageNotFound />,
  },
  {
    path: "/apartment",
    element: (
      <>
        <Navbar />
        <ApartmentPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
]);

export default router;
