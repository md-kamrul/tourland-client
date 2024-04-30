import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";

const AllSpot = () => {

    document.title = "TourLand - All Tourist Spots"

    const show_spot_list = useLoaderData();

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div className="bg-[#000e25] text-[#f8fbff]">
            <Navbar></Navbar>

            {
                loading ?
                    <div className="py-24 justify-center flex items-center">
                        <div className="loading loading-dots loading-lg text-center"></div>
                    </div>

                    :

                    <div>
                        <div className="w-[80%] mx-auto mt-24 flex justify-center">
                            <div className="dropdown dropdown-bottom">
                                <div tabIndex={0} role="button" className="btn m-1 bg-[#4d95a7] border border-[#4d95a7] text-[#f8fbff] hover:bg-[##f8fbff] hover:border-[#f8fbff] hover:text-[#4d95a7]">Average Cost</div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-[#4d95a7] border border-[#4d95a7] text-[#f8fbff] hover:bg-[#f8fbff] hover:border-[#f8fbff] hover:text-[#4d95a7] rounded-box w-52">
                                    <li><a>Low to High</a></li>
                                    <li><a>High to Low</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                            {
                                show_spot_list.map(signle_card => <SingleCard key={signle_card._id} signle_card={signle_card}></SingleCard>)
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default AllSpot;