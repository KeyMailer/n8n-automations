// react-router
import { createBrowserRouter } from "react-router-dom";

// pages
import Layout from "./layout";
import HomePage from "../pages/home-page";
import ErrorPage from "../components/error/error-page";
import AutomationDataId from "@/pages/automation-data-id";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/automation/:id", Component: AutomationDataId },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
