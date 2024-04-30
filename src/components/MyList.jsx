import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import MyListCard from "./MyListCard";

const MyList = () => {

    document.title = "TourLand - My List"

    const show_spot_list = useLoaderData();
    const {user} = useContext(AuthContext);
    const userEmail = user.email;

    return (
        <div className="bg-[#000e25] text-[#f8fbff]">
            <Navbar></Navbar>
            <h2 className="text-center text-2xl text-[#d7a31a] mb-10 mt-24 font-bold">My List</h2>

            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                {
                    show_spot_list.map(signle_card => <MyListCard userEmail={ userEmail} key={signle_card._id} signle_card={signle_card}></MyListCard>)                    
                }
            </div>
        </div>
    );
};

export default MyList;