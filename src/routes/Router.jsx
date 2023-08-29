import Home from "../components/Home";
import Shop from "../components/Shop";
import Product from "../components/Product";
import Landing from "../components/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />, exact: true },
  {
    path: "shop",
    element: <Shop />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      { path: "product/:productId", element: <Product /> },
    ],
  },
  ,
]);
function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
