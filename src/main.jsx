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
  },
]);
root.render(<RouterProvider router={router} />);

