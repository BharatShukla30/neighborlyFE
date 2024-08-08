const Offer = () => {
    return (
        <div className="bg-[#EEEFF1] font-roboto flex flex-col items-center">
            <h1 className="text-[#0A2540] font-bold text-4xl my-4 max-lg:text-3xl max-[820px]:text-2xl">What we offer</h1>
            <div className="grid grid-cols-5 gap-3 p-28 pt-0 max-[820px]:grid-cols-2 max-[820px]:p-10 max-[430px]:grid-cols-1">
                <div className="bg-[#FFFFFF] h-60 p-14 text-center col-span-2  max-[820px]:col-span-1">
                    <h3 className="text-4xl  font-semibold  text-[#0A2540] mb-5 max-lg:text-2xl  max-[820px]:text-xl">Dynamic Feeds</h3>
                    <p className="inline-block text-xl max-lg:text-[18px] max-[820px]:text-base">Stay updated with posts and activities happening around you.</p>
                </div>
                <div className="bg-[#FFFFFF] h-60 p-14 text-center col-span-3 max-[820px]:col-span-1 max-[820px]:p-5">
                    <h3 className="text-3xl  font-semibold text-[#0A2540] mb-5 max-lg:text-2xl max-[820px]:text-base max-[820px]:mt-9">Location Based Chats Groups</h3>
                    <p className="inline-block text-xl max-lg:text-[18px] max-[820px]:text-[14px]">Join or create chat groups based on your location to discuss local events, share news, and connect with neighbors.</p>
                </div>
                <div className="bg-[#FFFFFF] h-60 p-14 text-center col-span-3 max-[820px]:col-span-1">
                    <h3 className="text-4xl font-semibold  text-[#0A2540] mb-5 max-lg:text-2xl max-[820px]:text-xl">In App Awards</h3>
                    <p className="inline-block text-xl max-lg:text-[18px] max-[820px]:text-base">Earn and give awards to recognize community contributions.</p>
                </div>
                <div className="bg-[#FFFFFF] h-60 p-14 text-center col-span-2 max-[820px]:col-span-1">
                    <h3 className="text-4xl font-semibold  text-[#0A2540] mb-5 max-lg:text-2xl max-[820px]:text-xl">Local Events</h3>
                    <p className="inline-block text-xl max-lg:text-[18px] max-[820px]:text-base">Discover and participate in events organized by your community.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Offer;