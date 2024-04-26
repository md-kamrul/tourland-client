import { createBrowserRouter, } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Roots from "../root/Roots";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots> ,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;