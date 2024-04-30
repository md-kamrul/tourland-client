import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const SpotUpdate = () => {

    const SpotDetails = useLoaderData();

    const handleUpdateSpot = event => {
        event.preventDefault();
    }

    return (
        <div className="bg-[#000e25]">
            <div className="w-[80%] mx-auto">
                <Navbar></Navbar>

                <div className=" mt-10 py-24 text-[#000e25]">
                    <h2 className="text-center text-2xl text-[#d7a31a] mb-10 font-bold">Update The Tourist Spot Info</h2>

                    <form onSubmit={handleUpdateSpot} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Image</span>
                            </label>
                            <input type="text" placeholder="Image Link" className="input input-bordered" name="image" defaultValue={SpotDetails.image} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Tourist Spot</span>
                            </label>
                            <input type="text" placeholder="Tourist Spot" className="input input-bordered" name="touristSpot" defaultValue={SpotDetails.touristSpot} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Country</span>
                            </label>
                            <input type="text" placeholder="Country" className="input input-bordered" name="country" defaultValue={SpotDetails.country} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Location</span>
                            </label>
                            <input type="text" placeholder="Location" className="input input-bordered" name="location" defaultValue={SpotDetails.location} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" className="input input-bordered" name="shortDescription" defaultValue={SpotDetails.shortDescription} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Average Cost</span>
                            </label>
                            <input type="number" placeholder="Average Cost" className="input input-bordered" name="averageCost" defaultValue={SpotDetails.averageCost} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Seasonality</span>
                            </label>
                            <input type="text" placeholder="Seasonality (Example: Summer, Winter)" className="input input-bordered" name="seasonality" defaultValue={SpotDetails.seasonality} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Travel Time</span>
                            </label>
                            <input type="number" placeholder="Travel Time (in days)" className="input input-bordered" name="travelTime" defaultValue={SpotDetails.travelTime} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Total Visitor Per Year</span>
                            </label>
                            <input type="number" placeholder="Total Visitor Per Year" className="input input-bordered" name="totalVisitorPerYear" defaultValue={SpotDetails.totalVisitorPerYear} required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#f8fbff] border border-[#f8fbff] text-[#000e25] hover:text-[#f8fbff] hover:border-[#f8fbff] hover:bg-transparent">Update Info</button>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default SpotUpdate;