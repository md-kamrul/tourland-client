import { useLoaderData } from "react-router-dom";

const ShowSpotList = () => {

    const show_spot_list = useLoaderData();

    return (
        <div>
            <h2>show list: {show_spot_list.length}</h2>
        </div>
    );
};

export default ShowSpotList;