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
import PrivateRoute from "../routes/PrivateRoute";
import ShowSpotList from "../components/ShowSpotList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/addList")
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
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/my_list",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: "/all_spot",
                element: <AllSpot></AllSpot>,
                loader: () => fetch("http://localhost:5000/addList")
            },
            {
                path: "/add_list",
                element: <PrivateRoute><AddList></AddList></PrivateRoute>
            }, 
            // {
            //     path: "/show_spot_list",
            //     element: <ShowSpotList></ShowSpotList>,
            //     // loader: () => fetch("http://localhost:5000/addList")
            // }
        ]
    },
]);

export default router;