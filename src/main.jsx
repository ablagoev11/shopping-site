import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./index.css";
import { CategoriesDataProvider } from "./providers/CategoriesDataProvider";
import { ProductsDataProvider } from "./providers/ProductsDataProvider";
import { CartProvider } from "./providers/CartProvider";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductsDataProvider>
        <CategoriesDataProvider>
          <RouterProvider router={router} />
        </CategoriesDataProvider>
      </ProductsDataProvider>
    </CartProvider>
  </StrictMode>
);
