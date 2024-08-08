import image2 from "../../assets/productDesign/Frame2.svg";

const Section2 = () => {
  return (
    <section className="bg-custom-blue ">
      <div className="flex  justify-between max-[431px]:ml-5">
        <img src={image2} alt="image2" className=" max-w-64 m-40  max-[821px]:m-28 max-[821px]:h-[400px] max-[431px]:h-[220px] max-[431px]:m-10" />
        <div className="text-white m-auto">
          <p className="text-6xl max-[1025px]:text-4xl max-[821px]:text-3xl max-[431px]:text-xl">Dynamic Wall</p>
          <p className="mt-6 mr-14 max-[821px]:mr-0 text-3xl max-[1025px]:text-xl max-[1025px]:mr-12 max-[821px]:text-xl max-[431px]:text-xs max-[431px]:mr-14">
            Neighborly has unique dynamic wall feature, which help you to see
            and share post according to your location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;