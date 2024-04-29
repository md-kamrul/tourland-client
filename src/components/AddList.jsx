import { useState } from "react";
import Navbar from "./Navbar";
import Swal from 'sweetalert2'

const AddList = () => {

    document.title = "TourLand - Add Tourist Spots"

    const [addList, setAddList] = useState("");

    const handleAddList = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const shortDescription = form.shortDescription.value;
        const touristSpot = form.touristSpot.value;
        const country = form.country.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorPerYear = form.totalVisitorPerYear.value;

        const addList = { image, shortDescription, touristSpot, country, location, averageCost, seasonality, travelTime, totalVisitorPerYear };

        console.log(addList);

        // send data to the server
        fetch("http://localhost:5000/addList", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(addList)
        })
            .then(res => res.json())
            .then(data => { 
                if (data.insertedId) { 
                    Swal.fire({
                        title: "Done!",
                        text: `You successfully added a tourist spot...`,
                        icon: "success"
                    });
                }
            })
        setAddList("");
    }

    return (
        <div className="bg-[#000e25]">
            <div className="w-[80%] mx-auto">
                <Navbar></Navbar>

                <div className=" mt-10 py-24 text-[#000e25]">
                    <h2 className="text-center text-2xl text-[#d7a31a] mb-10 font-bold">Add Tourist List</h2>

                    <form onSubmit={handleAddList} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Image</span>
                            </label>
                            <input type="text" placeholder="Image Link" className="input input-bordered" name="image" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Tourist Spot</span>
                            </label>
                            <input type="text" placeholder="Tourist Spot" className="input input-bordered" name="touristSpot" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Country</span>
                            </label>
                            <input type="text" placeholder="Country" className="input input-bordered" name="country" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Location</span>
                            </label>
                            <input type="text" placeholder="Location" className="input input-bordered" name="location" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" className="input input-bordered" name="shortDescription" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Average Cost</span>
                            </label>
                            <input type="number" placeholder="Average Cost" className="input input-bordered" name="averageCost" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Seasonality</span>
                            </label>
                            <input type="text" placeholder="Seasonality (Example: Summer, Winter)" className="input input-bordered" name="seasonality" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Travel Time</span>
                            </label>
                            <input type="number" placeholder="Travel Time (in days)" className="input input-bordered" name="travelTime" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#f8fbff]">Total Visitor Per Year</span>
                            </label>
                            <input type="number" placeholder="Total Visitor Per Year" className="input input-bordered" name="totalVisitorPerYear" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#f8fbff] border border-[#f8fbff] text-[#000e25] hover:text-[#f8fbff] hover:border-[#f8fbff] hover:bg-transparent">Add Tourist List</button>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default AddList;