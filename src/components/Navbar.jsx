import   { useEffect, useRef, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux"
import useNavigate from "react-router-dom"
import { logoutUser } from "../redux/actions/authActions"

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.auth)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const avtarRef = useRef(null)

  const menuItems = ["Profile", "Sign Out"]

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      menuOpen &&
      !menuRef.current.contains(event.target) &&
      !avtarRef.current.contains(event.target)
    ) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
  })

  const handleSignOut = () => {
    setMenuOpen(false)
    setMobileMenuOpen(false)
    dispatch(logoutUser()).then((result) => {
      if (result.success) {
        navigate("/signin")
      }
    })
  }

  return (
    <nav
      className="flex items-center justify-between p-4 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="">
          <span className="text-xl md:text-3xl font-bold tracking-widest">
            Neighborly
          </span>
        </a>
      </div>

      {isAuthenticated && (
        <div
          ref={avtarRef}
          className="hidden lg:inline-block md:inline-block text-3xl rounded-full cursor-pointer hover:bg-slate-200 hover:shadow-sm hover:text-4xl  hover:opacity-50 transition-all duration-300"
          onClick={() => {
            setMenuOpen(!menuOpen)
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
            {/* {menuItems.map((item, idx) => (
                <li key={idx} className='px-12 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-300'>{item}</li>
              ))} */}
            <li className="px-12 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-300">
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
  )
}

export default Navbar
