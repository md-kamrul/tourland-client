import Lottie from "lottie-react";
import error404 from "/public/error404.json";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const ErrorPage = () => {

    return (
        <div className="bg-[#000e25] w-full h-screen">

            <Navbar></Navbar>

            <Lottie className="w-[40%] mx-auto mt-[-5%]" animationData={error404} />

            <h2 className="text-center mt-[-3%] text-[#f8fbff]">
                <span className="text-xl mb-3">
                    Page Not Found.
                </span>
                <br />
                <Link to="/" className="label-text-alt link link-hover text-[#d7a31a] font-bold underline"><span className="text-base">Go to Home</span></Link>
            </h2>

        </div>
    );
};

export default ErrorPage;