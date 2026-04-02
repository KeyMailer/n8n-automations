// react-router
import { createBrowserRouter } from "react-router-dom";

// pages
import Layout from "./layout";
import HomePage from "../pages/home-page";
import ErrorPage from "../components/error/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", Component: HomePage },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
