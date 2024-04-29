import Navbar from "./Navbar";

const AddList = () => {

    document.title = "TourLand - Add Tourist Spots"

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#000e25]">
                <div className="w-[80%] mx-auto">

                    <div className=" mt-10 py-24 text-[#f8fbff]">
                        <h2 className="text-center text-2xl text-[#d7a31a] mb-10 font-bold">Add Tourist List</h2>

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Image</span>
                                </label>
                                <input type="text" placeholder="Image Link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Tourist Spot</span>
                                </label>
                                <input type="text" placeholder="Tourist Spot" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Country</span>
                                </label>
                                <input type="text" placeholder="Country" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Location</span>
                                </label>
                                <input type="text" placeholder="Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Short Description</span>
                                </label>
                                <input type="text" placeholder="Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Average Cost</span>
                                </label>
                                <input type="number" placeholder="Average Cost" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Seasonality</span>
                                </label>
                                <input type="text" placeholder="Seasonality" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Travel Time</span>
                                </label>
                                <input type="text" placeholder="Travel Time (in days)" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8fbff]">Total Visitor Per Year</span>
                                </label>
                                <input type="number" placeholder="Total Visitor Per Year" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#f8fbff] border border-[#f8fbff] text-[#000e25] hover:text-[#f8fbff] hover:border-[#f8fbff] hover:bg-transparent">Add Tourist List</button>
                            </div>
                        </form>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddList;