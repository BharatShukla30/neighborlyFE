import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={`grow-0 shrink-0 basis-auto bg-cblue w-full h-30 px-10 pt-4 pb-2${
        location.pathname === "/dashboard" || location.pathname === "/location"
          ? "hidden"
          : ""
      }`}
    >
      <div className="w-full">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="">
            <a href="/" className="flex items-center sm:mb-0">
              <span className="self-center  text-white text-2xl font-semibold whitespace-nowrap ">
                Neighborly
              </span>
            </a>
            <p className="pt-1 lg:py-3 text-white">
              Explore, Connect, Thrive - Your Local Community Hub
            </p>
          </div>
          <ul className="flex flex-wrap items-center text-sm font-medium text-white sm:mb-0 mt-4">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <hr className="border-[1px] border-gray-200 sm:mx-auto my-3" /> */}
        <span className="block text-sm text-white sm:text-center ">
          ©2024{" "}
          <a href="/" className="hover:underline">
            Neighborly™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
