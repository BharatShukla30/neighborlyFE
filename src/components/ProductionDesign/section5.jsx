import image5 from "../../assets/productDesign/Frame5.svg"
const Section5 = () => {
  return (
    <section className="bg-custom-blue pt-5">
      <div className="flex justify-between ">
        <div className="text-white mt-64 max-[821px]:mt-32  text-end max-[431px]:mt-10">
          <p className="text-6xl max-[1025px]:text-4xl max-[821px]:text-4xl
          max-[431px]:text-xl">Group Chats</p>
          <p className="mt-6 ml-16 text-3xl max-[821px]:ml-2 max-[1025px]:text-xl max-[821px]:text-xl max-[431px]:text-xs max-[431px]:ml-3">
          Chat in your neighborhood group and communities, share your thought and stay connected with people in your neighborhood.
          </p>
        </div>
        <img src={image5} alt="image5" className="max-w-64 m-40 max-[1025px]:mr-24 max-[821px]:h-[400px] max-[431px]:h-[220px] max-[431px]:mr-14 max-[431px]:m-10"/>
      </div>
    </section>
  );
};

export default Section5;
