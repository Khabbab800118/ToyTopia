import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import AllToys from "../Pages/AllToys";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        loader: () => fetch("/slider.json"),
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("/popularToys.json"),
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login,
            },
            {
                path: "/auth/register",
                Component: Register,
            }
        ]
    },
    {
        path: "/toys",
        Component: AllToys,
        loader: () => fetch("/allToys.json"),

    },
    {
        path: "/*",
        element: <h1 className="text-6xl text-center my-auto">Error-404</h1>,
    },
])

export default router;