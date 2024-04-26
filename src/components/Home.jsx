import Hero from "../components/Hero";
import Navbar from "./Navbar";

const Home = () => {

    document.title = "TourLand"

    return (
        <div>
            <div className="bg-[url('/src/assets/heroBG.jpg')] w-full h-screen">

                <Navbar></Navbar>

                {/* hero section */}
                <Hero></Hero>

            </div>
        </div>
    );
};

export default Home;