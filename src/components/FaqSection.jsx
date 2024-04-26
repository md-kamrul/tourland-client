const FaqSection = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="collapse collapse-plus border border-[#4d95a7]">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[#4d95a7]">
                    What countries are considered Southeast Asia?
                </div>
                <div className="collapse-content">
                    <p>
                        Southeast Asia is a region in southern Asia, known for its diverse cultures, beautiful beaches, and delicious food. It includes 6 countries: Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, Cambodia.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus border border-[#4d95a7]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-[#4d95a7]">
                    What is the best time to visit Southeast Asia?
                </div>
                <div className="collapse-content">
                    <p>
                        The best time to visit Southeast Asia depends on your preferences and which countries you plan to visit. Generally, the region experiences a dry season from November to April and a wet season from May to October. If you want to avoid crowds and prefer hot, sunny weather, the dry season is ideal. However, prices tend to be higher during this time. The wet season offers lush landscapes and fewer tourists, but be prepared for occasional downpours.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus border border-[#4d95a7]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-[#4d95a7]">
                    Is Southeast Asia a safe destination for travelers?
                </div>
                <div className="collapse-content">
                    <p>
                        Southeast Asia is generally a safe and welcoming region for tourists. However, as with any destination, it is important to be aware of your surroundings and take precautions. Familiarize yourself with local customs and laws, be mindful of your belongings, and use common sense.  We recommend checking travel advisories from the government of your home country for the latest information.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;