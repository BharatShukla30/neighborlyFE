import image3 from "../../assets/productDesign/Frame3.svg"
const Section3 = () => {
  return (
    <section className="bg-custom-blue pt-5">
      <div className="flex justify-between ">
        <div className="text-white mt-64 max-[821px]:mt-32 text-end max-[431px]:mt-10">
          <p className="text-6xl max-[1025px]:text-4xl max-[821px]:text-4xl max-[431px]:text-xl">Communities</p>
          <p className="mt-6 ml-24 max-[821px]:ml-0 text-3xl max-[1025px]:text-xl max-[1025px]:ml-0 max-[821px]:text-xl max-[431px]:text-xs max-[431px]:ml-0">
          Neighborly allows you to create communities, join communities based on your location, interests and event you organize.
          </p>
        </div>
        <img src={image3} alt="image3" className="max-w-64 m-40 my-0 max-[1025px]:m-32 max-[821px]:max-h-[400px] max-[431px]:max-h-[220px] max-[431px]:m-10 "/>
      </div>
    </section>
  );
};

export default Section3;
