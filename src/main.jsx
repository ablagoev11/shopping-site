import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/Navigation/Nav";
import "./index.css";
import { CategoriesDataProvider } from "./providers/CategoriesDataProvider";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoriesDataProvider>
      <RouterProvider router={router} />
    </CategoriesDataProvider>
  </StrictMode>
);
