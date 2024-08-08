import image4 from "../../assets/productDesign/Frame4.svg";

const Section4 = () => {
  return (
    <section className="bg-custom-blue pt-5">
      <div className="flex justify-between ml-16 max-[431px]:ml-5">
        <img src={image4} alt="image2" className="max-w-64 m-40 mb-0 max-[821px]:h-[400px] max-[431px]:h-[220px] max-[431px]:m-10" />
        <div className="text-white m-auto ">
          <p className="text-6xl mr-10 max-[1025px]:text-4xl max-[821px]:text-3xl max-[431px]:text-xl max-[431px]:mr-4">Browse & Share Events</p>
          <p className="mt-6 mr-10 max-[821px]:mr-1 text-3xl max-[1025px]:text-xl max-[821px]:text-xl max-[431px]:text-xs max-[431px]:mr-14">
            Neighborly make it easy for you to check event organized in your neighborhood and also share events you have organized in your area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
