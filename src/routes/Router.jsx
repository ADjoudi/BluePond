import Home from "../components/Home";
import Shop from "../components/Shop";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
]);
function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
