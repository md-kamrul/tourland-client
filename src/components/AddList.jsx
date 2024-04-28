import Navbar from "./Navbar";
import { IoArrowBackOutline } from "react-icons/io5";

const AddList = () => {

    document.title = "TourLand - Add Tourist Spots"

    return (
        <div>
            <Navbar></Navbar>

            <div className="mt-24">
                <div className="flex gap-[400px]">
                <div className="text-3xl"><IoArrowBackOutline /></div>
                <h2 className="text-center text-2xl text-[#d7a31a] mb-10 bg-red-600">Add Tourist List</h2>
                </div>
            </div>

        </div>
    );
};

export default AddList;