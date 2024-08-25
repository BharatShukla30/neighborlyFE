import image2 from "../../assets/Frame 2.png";

const Section2 = () => {
  return (
    <section className="bg-custom-blue ">
      <div className="flex justify-between ml-16 max-phone:ml-5">
        <img src={image2} alt="image2" className="max-medium:h-[400px] max-phone:h-[220px]" />
        <div className="text-white m-auto">
          <p className="text-6xl max-large:text-4xl max-medium:text-3xl max-phone:text-xl">Dynamic Wall</p>
          <p className="mt-6 mr-14 max-medium:mr-10 text-3xl max-large:text-xl max-large:mr-12 max-medium:text-xl max-phone:text-xs max-phone:mr-14">
            Neighborly has unique dynamic wall feature, which help you to see
            and share post according to your location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
