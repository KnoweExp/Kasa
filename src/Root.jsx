import React from "react";
import { createRoot } from "react-dom/client";
import "./style.sass";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
