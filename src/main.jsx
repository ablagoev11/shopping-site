import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./index.css";
import { CategoriesDataProvider } from "./providers/CategoriesDataProvider";
import { ProductsDataProvider } from "./providers/ProductsDataProvider";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsDataProvider>
      <CategoriesDataProvider>
        <RouterProvider router={router} />
      </CategoriesDataProvider>
    </ProductsDataProvider>
  </StrictMode>
);
