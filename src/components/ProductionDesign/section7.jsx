import userImage from "../../assets/productDesign/userImage.png";
import apostrophe from "../../assets/productDesign/apostrophe.png";
import apostropheRev from "../../assets/productDesign/apostrophe reverse.png";
const Section7 = () => {
  return (
    <section className="my-10">
      
        <div className="flex flex-col text-center">
          <p className="text-4xl mb-6 max-[431px]:text-2xl">
            <b>What our user says</b>
          </p>
          <div className="flex justify-evenly">
          <div className="bg-custom-blue rounded-2xl text-white w-72  max-[821px]:w-[470px]  max-[821px]:flex  max-[431px]:w-[400px]   ">
              <div className="flex items-center space-x-10 ml-8 mt-8 max-[821px]:mt-20 max-[821px]:flex-col max-[821px]:space-x-0 max-[821px]:space-y-3  max-[431px]:mt-14">
                <img src={userImage} alt="userImage" />
                <p>
                  <b>Kavya1719</b>
                </p>
              </div>
              <div className="mx-8 mt-5 max-[431px]:mx-1 max-[431px]:my-5" >
                <div>
                  <img src={apostrophe} alt="apostrophe " className="max-[431px]:h-4" />
                </div>
                <div className="text-start mx-5 max-[431px]:text-[12px]">
                  This is best social media platform I have used till now. This
                  app really connect me with communities according to my
                  interest and I got to know people in my neighbors really well.
                </div>
                <div className="flex justify-end ">
                  <img src={apostropheRev} alt="apostropheRev" className="max-[431px]:h-4 mb-5" />
                </div>
              </div>
            </div>

            <div className="bg-custom-blue rounded-2xl text-white w-72 max-[821px]:hidden">
              <div className="flex items-center space-x-10 ml-8 mt-8">
                <img src={userImage} alt="userImage" />
                <p>
                  <b>Kavya1719</b>
                </p>
              </div>
              <div className="mx-8 mt-5" >
                <div>
                  <img src={apostrophe} alt="apostrophe" />
                </div>
                <div className="text-start mx-5">
                  This is best social media platform I have used till now. This
                  app really connect me with communities according to my
                  interest and I got to know people in my neighbors really well.
                </div>
                <div className="flex justify-end ">
                  <img src={apostropheRev} alt="apostropheRev" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Section7;
