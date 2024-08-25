import image5 from "../../assets/Frame5.png"
const Section5 = () => {
  return (
    <section className="bg-custom-blue pt-5">
      <div className="flex justify-between ">
        <div className="text-white mt-64 max-medium:mt-32  text-end max-phone:mt-10">
          <p className="text-6xl max-large:text-4xl max-medium:text-4xl
          max-phone:text-xl">Group Chats</p>
          <p className="mt-6 text-3xl max-medium:ml-2 max-large:text-xl max-medium:text-xl max-phone:text-xs max-phone:ml-3">
          Chat in your neighborhood group and communities, share your thought and stay connected with people in your neighborhood.
          </p>
        </div>
        <img src={image5} alt="image5" className="mr-24 max-large:mr-24 max-medium:h-[400px] max-phone:h-[220px] max-phone:mr-14"/>
      </div>
    </section>
  );
};

export default Section5;
