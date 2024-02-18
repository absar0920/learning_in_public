import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Inventory from "./components/Inventory.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <div>Hello home</div>,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
