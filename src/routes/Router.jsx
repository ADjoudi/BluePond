import App from "../components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);
function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
