import CategoryPage from "./pages/Category/CategoryPage";
import Layout from "./pages/Layout";
import ProductPage from "./pages/Product/ProductPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/category/:id",
        element: <CategoryPage />,
      },
      { index: true, element: <ProductPage /> },
    ],
  },
  { path: "product/:id", element: <ProductPage /> },
];
export default routes;
