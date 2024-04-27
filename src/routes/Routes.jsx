import { createBrowserRouter, } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Roots from "../root/Roots";
import Profile from "../components/Profile";
import MyList from "../components/MyList";
import AllSpot from "../components/AllSpot";
import AddList from "../components/AddList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
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
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/my_list",
                element: <MyList></MyList>
            },
            {
                path: "/all_spot",
                element: <AllSpot></AllSpot>
            },
            {
                path: "/add_list",
                element: <AddList></AddList>
            }
        ]
    },
]);

export default router;