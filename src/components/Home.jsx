import Hero from "../components/Hero";
import FaqSection from "./FaqSection";
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

            {/* FAQ section */}
            <div className="bg-[#000e25] text-[#f8fbff]">
                <div className="w-[80%] mx-auto py-24">
                    <h2 className="text-center text-2xl text-[#d7a31a] mb-10">FAQ</h2>
                    <FaqSection></FaqSection>
                </div>
            </div>
        </div>
    );
};

export default Home;