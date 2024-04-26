import Lottie from "lottie-react";
import error404 from "../../public/error404.json";
import Navbar from "./Navbar";


const ErrorPage = () => {

    return (
        <div
        >
            <Navbar></Navbar>

            <Lottie className="w-auto h-auto" animationData={error404} />;
        
        </div>
    );
};

export default ErrorPage;