import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoTimeSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleCard = ({ signle_card }) => {

    const { _id, image, touristSpot, shortDescription, location, averageCost, travelTime, totalVisitorPerYear } = signle_card;

    return (
        <div>
            <div className="card bg-[#4d95a7] border border-[#4d95a7] bg-opacity-30">
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{touristSpot}</h2>
                    {
                        shortDescription.length > 50 ?
                            <p>{shortDescription.slice(0, 50)}...</p>
                            :
                            <p>{shortDescription}</p>
                    }
                    <div className="flex items-center gap-2">
                        <FaLocationDot className="text-xl text-[#4d95a7]" />
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <AiFillDollarCircle className="text-xl text-[#4d95a7]" />
                            <p>$ {averageCost}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoTimeSharp className="text-xl text-[#4d95a7]" />
                            <p>{travelTime} Days</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <BsPeopleFill className="text-xl text-[#4d95a7]" />
                        <p>{totalVisitorPerYear} Person</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/addList/${ _id}`}>
                            <button className="btn bg-[#4d95a7] text-[#000e25] border hover:border-[#4d95a7] border-[#4d95a7] hover:bg-opacity-50 hover:bg-[#4d95a7] hover:text-[#f8fbff]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;