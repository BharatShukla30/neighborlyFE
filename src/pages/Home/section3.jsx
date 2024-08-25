import image3 from "../../assets/Frame3.png"
const Section3 = () => {
  return (
    <section className="bg-custom-blue pt-5">
      <div className="flex justify-between ">
        <div className="text-white mt-64 max-medium:mt-32 text-end max-phone:mt-10">
          <p className="text-6xl max-large:text-4xl max-medium:text-4xl max-phone:text-xl">Communities</p>
          <p className="mt-6 ml-24 max-medium:ml-0 text-3xl max-large:text-xl max-medium:text-xl max-phone:text-xs max-phone:ml-0">
          Neighborly allows you to create communities, join communities based on your location, interests and event you organize.
          </p>
        </div>
        <img src={image3} alt="image3" className="mr-28 max-large:mr-24 max-medium:h-[400px] max-phone:h-[220px] max-phone:mr-14 "/>
      </div>
    </section>
  );
};

export default Section3;
