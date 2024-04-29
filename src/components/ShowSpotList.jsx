import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";

const ShowSpotList = () => {

    const show_spot_list = useLoaderData();

    return (
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                show_spot_list.slice(0, 6).map(signle_card => <SingleCard key={signle_card._id} signle_card={signle_card}></SingleCard>)
            }
        </div>
    );
};

export default ShowSpotList;