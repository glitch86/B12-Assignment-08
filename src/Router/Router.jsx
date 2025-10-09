import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";
import ErrorPage from "../Pages/ErrorPage"
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Install,
      },
      {
        path: "apps/:id",
        Component:AppDetails
      }
    ],
  },
]);
