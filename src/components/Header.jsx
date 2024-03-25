import { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import logo from "../assets/websiteName.png"


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const avtarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      menuOpen &&
      !menuRef.current.contains(event.target) &&
      !avtarRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  });

  const handleSignOut = () => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
    dispatch(logoutUser()).then((result) => {
      if (result.success) {
        navigate("/");
      }
    });
  };


  const handleProfile = () => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
    navigate("/profile");
  };

  return (
    <header className=" inset-x-0 z-50    fixed top-0">


      <nav
        className="flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <span >
              <img src={logo} className="h-10 " />
            </span>
          </a>
        </div>
      {/* 
        {!isAuthenticated && (
          
          <div className="flex lg:flex-1 justify-end">
            
            <ul className="flex flex-row gap-4 text-black">
                <li className="px-4 py-2 rounded  transition-colors duration-200">
                    <a href="/signup" className="no-underline">Sign up</a>
                </li>
                <li className="px-4 py-2 rounded  transition-colors duration-200">
                    <a href="/signin" className="no-underline">Sign in</a>
                </li>
            </ul>
          </div>
        )} */
        }
        

        {isAuthenticated && (
          <div
            ref={avtarRef}
            className="hidden lg:inline-block md:inline-block text-3xl rounded-full cursor-pointer hover:bg-slate-200 hover:shadow-sm hover:text-4xl  hover:opacity-50 transition-all duration-300"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <RxAvatar />
          </div>
        )}

        {isAuthenticated && menuOpen && (
          <div
            ref={menuRef}
            className="md:block absolute hidden right-5 bg-gray-100 top-14 z-10 shadow-md border border-gray-300 text-sm rounded-md"
          >
            <ul>
              {/* {
                menuItems.map((item, idx) => (
                  <li key={idx} className='px-12 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-300'>{item}</li>
                  ))
              } 
            */}
              <li className="px-12 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-300"
                onClick={handleProfile}
              >
                Profile
              </li>
              <li
                className="px-12 py-2 cursor-pointer hover:bg-gray-300"
                onClick={handleSignOut}
              >
                Sign Out
              </li>
            </ul>
          </div>
        )}

        <div
          className={`flex lg:hidden md:hidden ${
            isAuthenticated ? "" : "hidden"
          }`}
        >
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className={`lg:hidden md:hidden ${isAuthenticated ? "" : "hidden"}`}
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold">Neighborly</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 md:flow-root hidden ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleSignOut}
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
