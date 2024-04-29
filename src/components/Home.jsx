import Hero from "../components/Hero";
import CountrySection from "./CountrySection";
import FaqSection from "./FaqSection";
import Navbar from "./Navbar";
import ShowSpotList from "./ShowSpotList";

const Home = () => {

    document.title = "TourLand"

    return (
        <div>
            <div className="bg-[url('/src/assets/heroBG.jpg')] w-full h-screen">

                <Navbar></Navbar>

                {/* hero section */}
                <Hero></Hero>

            </div>

            {/* tourist spot list section  */}
            {/* <div className="bg-[#000e25] text-[#f8fbff] w-full pt-24 text-center font-semibold">
                <h2 className="text-center text-2xl text-[#d7a31a] mb-10 font-bold">Tourist Spots</h2>
                <ShowSpotList></ShowSpotList>
            </div> */}

            {/* country section */}
            <div className="bg-[#000e25] text-[#f8fbff] w-full pt-24 text-center font-semibold">
                <h2 className="text-center text-2xl text-[#d7a31a] mb-10 font-bold">Countries You Can Visit</h2>
                <CountrySection></CountrySection>
            </div>

            {/* newsletter section */}
            <div className="bg-[#000e25] text-[#f8fbff] w-full pt-24 text-center font-semibold">
                <div className="bg-[url('/src/assets/newsletter.jpg')] bg-cover w-[80%] mx-auto py-24 rounded-lg">
                    Do not miss out the latest in the world of travel! Subscribe to <br />our newsletter and let the adventures begin!
                    <div>
                        <button className="bg-[#f8fbff] border border-[#f8fbff] text-[#000e25] rounded-lg mt-5 bg-opacity-50 px-5 py-3 font-bold">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* FAQ section */}
            <div className="bg-[#000e25] text-[#f8fbff]">
                <div className="w-[80%] mx-auto py-24">
                    <h2 className="text-center text-2xl text-[#d7a31a] mb-10 font-bold">FAQ</h2>
                    <FaqSection></FaqSection>
                </div>
            </div>
        </div>
    );
};

export default Home;