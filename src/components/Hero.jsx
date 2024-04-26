import SwiperCard from "./SwiperCard/SwiperCard";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between text-[#f8fbff] w-[80%] mx-auto mt-5 md:mt-14 lg:mt-28 items-center md:gap-3">
            <div className="md:w-2/3">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-7 lg:mb-10">Unveil Southeast Asia: Your Adventure Awaits</h2>
                <h3 className="md:text-lg lg:text-xl opacity-90">Explore ancient temples, vibrant cultures, and breathtaking landscapes. Discover the magic of Southeast Asia.</h3>
            </div>
            <div>
                <SwiperCard></SwiperCard>
            </div>
        </div>
    );
};

export default Hero;