import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import SingleCard from "./SingleCard";

const AllSpot = () => {

    const show_spot_list = useLoaderData();

    return (
        <div className="bg-[#000e25] text-[#f8fbff]">
            <Navbar></Navbar>

            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                {
                    show_spot_list.map(signle_card => <SingleCard key={signle_card._id} signle_card={signle_card}></SingleCard>)
                }
            </div>

        </div>
    );
};

export default AllSpot;