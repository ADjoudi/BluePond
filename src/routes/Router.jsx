import Home from "../components/Home";
import Shop from "../components/Shop";
import Product from "../components/Product";
import Landing from "../components/Landing";
import Checkout from "../components/Checkout";
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
      { path: "checkout", element: <Checkout /> },
    ],
  },
  ,
]);
function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
