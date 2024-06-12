import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './style.sass'
import ApartmentPage from '../Pages/ApartmentPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPageNotFound from '../Pages/ErrorPageNotFound';

const container = document.getElementById('root');
const root = createRoot(container);
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
    <Footer />
    </>
    ),
  },
]);
root.render(<RouterProvider router={router} />);

