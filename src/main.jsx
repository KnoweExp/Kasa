import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './style.sass'

const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: "/apartment",
    element: <h1>Nos appartements</h1>,
  },
  {
    path: "/about",
    element: <h1>A propos</h1>,
  },
]);
root.render(<RouterProvider router={router} />);

