const CountrySection = () => {
    return (
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center justify-center cursor-pointer static bangladesh">
                <div className="absolute z-40 font-semibold text-xl">
                    Bangladesh
                </div>
                <div>
                    <img className="rounded-lg opacity-80" src="https://i.ibb.co/JtqvLv5/country-bangladesh.jpg" alt="bangladesh" />
                </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer static cambodia">
                <div className="absolute z-40 font-semibold text-xl">
                    Cambodia
                </div>
                <div>
                    <img className="rounded-lg opacity-80" src="https://i.ibb.co/3NHsVxf/country-cambodia.jpg" alt="combodia" />
                </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer static indonesia">
                <div className="absolute z-40 font-semibold text-xl">
                    Indonesia
                </div>
                <div>
                    <img className="rounded-lg opacity-80" src="https://i.ibb.co/qNDXRrs/country-indonesia.jpg" alt="indonesia" />
                </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer static malaysia">
                <div className="absolute z-40 font-semibold text-xl">
                    Malaysia
                </div>
                <div>
                    <img className="rounded-lg opacity-80" src="https://i.ibb.co/PhgqS2p/country-malaysia.jpg" alt="malaysia" />
                </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer static thailand">
                <div className="absolute z-40 font-semibold text-xl">
                    Thailand
                </div>
                <div>
                    <img className="rounded-lg opacity-80" src="https://i.ibb.co/S7HC1Bb/country-thailand.jpg" alt="thailand" />
                </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer static vietnam">
                <div className="absolute z-40 font-semibold text-xl">
                    Vietnam
                </div>
                <div>
                    <img className="rounded-lg opacity-80" src="https://i.ibb.co/gPNr0qd/country-vietnam.jpg" alt="vietnam" />
                </div>
            </div>
        </div>
    );
};

export default CountrySection;