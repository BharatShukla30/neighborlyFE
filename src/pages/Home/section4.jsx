import image4 from "../../assets/Frame4.png";

const Section4 = () => {
  return (
    <section className="bg-custom-blue pt-5">
      <div className="flex justify-between ml-16 max-phone:ml-5">
        <img src={image4} alt="image2" className="max-medium:h-[400px] max-phone:h-[220px]" />
        <div className="text-white m-auto ">
          <p className="text-6xl max-large:text-4xl max-medium:text-3xl max-phone:text-xl max-phone:mr-4">Browse & Share Events</p>
          <p className="mt-6 max-medium:mr-1 text-3xl max-large:text-xl max-medium:text-xl max-phone:text-xs max-phone:mr-14">
            Neighborly make it easy for you to check event organized in your neighborhood and also share events you have organized in your area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
