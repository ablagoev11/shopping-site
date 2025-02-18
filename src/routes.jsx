import Landing from "./pages/Landing/Landing";
import Layout from "./pages/Layout";
import Product from "./pages/Product/Product";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {},
    ],
  },
  { path: "product/:id", element: <Product /> },
];
export default routes;
