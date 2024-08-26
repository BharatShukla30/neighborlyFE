import image1 from "../../assets/Frame1.png";
// import logo from "../../assets/logo.png";
import logo from '../../assets/AboutUs/logo.svg'
const Section1 = () => {
  return (
    <header className="flex justify-between mb-0">
      <div className="ml-28 my-8 flex flex-col justify-between max-phone:ml-5 max-phone:mb-3" >
        <div>
          {/* <img src={logo} alt="logo" className="max-h-10 max-medium:max-h-10 max-phone:max-h-6" /> */}
        </div>
        <div className="max-phone:mt-7">
          <div className="text-5xl max-large:text-3xl max-medium:text-2xl max-phone:text-[18px] max-phone:pt-5">
            <b>Connecting Neighbors, Building Communities</b>
          </div>
          <div className="my-5 max-phone:my-0">
            <p className="text-3xl max-large:text-xl max-medium:text-sm max-phone:text-xs max-large:pr-0 mr-14 max-phone:mr-0 pr-16 font-extralight">
              Discover, connect, engage with your neighbors like never.
            </p>
          </div>
          <div className="my-8">
            <a
              href="/"
              className="bg-custom-blue text-white text-xl font-medium py-2 px-4 rounded-full max-medium:text-sm max-phone:text-xs"
            >
              Download App
            </a>
            <p className="text-xl font-semibold text-red-500 blinking p-1">
            *App will be launched on 15 Sep 2024
            </p>
          </div>
        </div>
      </div>
      <img src={image1} alt="img1" className="max-medium:w-[400px] max-phone:w-[207px]" />
    </header>
  );
};

export default Section1;