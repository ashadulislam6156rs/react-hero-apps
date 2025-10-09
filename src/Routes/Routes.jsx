import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AppsPage from "../Pages/AppsPage";
import Installation from "../Pages/Installation";
import AppDetails from "../Components/AppDetails";
import ErrorPage_404 from "../ErrorApps/ErrorPage_404";
import ErrorAppNotFound from "../ErrorApps/ErrorAppNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement: <ErrorPage_404/>,
        children: [
            {
                index: true,
                path: "/",
                element:<Home/>,
            },
            {
                path: "/appspage/",
                element:<AppsPage/>
            },
            {
                path: "/installation",
                element:<Installation/>
            },
            {
                path: "/appdetails/:id",
                element: <AppDetails />,
                errorElement: <ErrorAppNotFound/>
            }
    ]
  },
]);
export default router;