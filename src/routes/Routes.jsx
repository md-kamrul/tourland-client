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
import SpotDetails from "../components/SpotDetails";
import SpotUpdate from "../components/SpotUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://tourism-server-coral.vercel.app/addList")
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
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: () => fetch("https://tourism-server-coral.vercel.app/addList")
            },
            {
                path: "/all_spot",
                element: <AllSpot></AllSpot>,
                loader: () => fetch("https://tourism-server-coral.vercel.app/addList")
            },
            {
                path: "/add_list",
                element: <PrivateRoute><AddList></AddList></PrivateRoute>
            },
            {
                path: "/addList/:id",
                element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tourism-server-coral.vercel.app/addList/${params.id}`)
            },
            {
                path: "/spot_update/:id",
                element: <PrivateRoute><SpotUpdate></SpotUpdate></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tourism-server-coral.vercel.app/addList/${params.id}`)
            }
        ]
    },
]);

export default router;