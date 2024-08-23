import image1 from "../../assets/productDesign/Frame1.png";
import logo from "../../assets/productDesign/logo.png";
const Section1 = () => {
  return (
    <header className="flex justify-between mb-0">
      <div className="ml-28 my-8 flex flex-col justify-between max-[431px]:ml-5 max-[431px]:mb-3" >
        <div>
          <img src={logo} alt="logo" className="max-h-20 max-[821px]:max-h-10 max-[431px]:max-h-6" />
        </div>
        <div className="max-[431px]:mt-7">
          <div className="text-5xl max-[1025px]:text-3xl max-[821px]:text-2xl max-[431px]:text-[18px] max-[431px]:pt-5">
            <b>Connecting Neighbors, Building Communities</b>
          </div>
          <div className="my-5 max-[431px]:my-0">
            <p className="text-3xl max-[1025px]:text-xl max-[821px]:text-sm max-[431px]:text-xs max-[1025px]:pr-0 mr-14 max-[431px]:mr-0 pr-16 font-extralight">
              Discover, connect, engage with your neighbors like never.
            </p>
          </div>
          <div className="my-8">
            <a
              href="/"
              className="bg-custom-blue text-white text-xl font-[821px] py-2 px-4 rounded-full max-[821px]:text-sm max-[431px]:text-xs"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
      <img src={image1} alt="img1" className="max-[821px]:max-w-[400px] max-[431px]:w-[207px]" />
    </header>
  );
};

export default Section1;
