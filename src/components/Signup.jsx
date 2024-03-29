import { useEffect, useState } from "react"
import svgImage from "../assets/signup.svg"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../redux/actions/authActions"
import { useNavigate } from "react-router-dom"

import PropTypes from "prop-types"

const SignUp = ({ setSignin }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error, user, isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/location")
    }
  }, [isAuthenticated])

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleForm = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required"
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
      validationErrors.username = "Username must be alphanumeric"
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required"
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      validationErrors.email = "Invalid email format"
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required"
    } else if (formData.password.trim().length < 8) {
      validationErrors.password = "Password must contain atleast 8 characters"
    }

    if (!formData.confirm_password.trim()) {
      validationErrors.confirm_password = "Confirm password is required"
    }

    if (formData.password.trim() !== formData.confirm_password.trim()) {
      validationErrors.confirm_password = "Password does not match"
    }

    setErrors(validationErrors)
    console.log(validationErrors)
    console.log(error)
    console.log(errors)

    if (Object.keys(validationErrors).length === 0) {
      dispatch(registerUser(formData)).then((result) => {
        console.log(result)
        if (result.payload?.user) {
          console.log("User registered successfully")
          navigate("/location")
        }
      })
    }
  }

  return (
    <section className="h-full w-full ">
      <div className=" ">
        <div className="h-full w-full flex my-auto items-center justify-center ">
          <div className=" md:bg-white   md:bg-opacity-50  md:backdrop-blur-xl  md:rounded  md:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:p-16  w-[350px] h-[650px] md:w-[500px]">
            <div className="flex gap-4 items-baseline ">
              <button className=" leading-tight " onClick={() => setSignin(1)}>
                Login
              </button>
              <button
                className=" font-bold leading-tight   text-cblue text-2xl"
                onClick={() => setSignin(0)}
              >
                Sign up
              </button>
            </div>
            {/* <p className="mt-2 text-base text-gray-800">
              Already have an account? {" "}
              <a
                href="/signin"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </a>
            </p> */}
            <form className="mt-8 " onSubmit={handleForm}>
              <div className="space-y-2">
                {error && (
                  <div
                    className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 "
                    role="alert"
                  >
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 mr-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">Error!</span> {error}
                    </div>
                  </div>
                )}
            
                <div>
                  <label
                    htmlFor="name"
                    className=" font-medium text-sm text-gray-900"
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="username"
                      placeholder="Username"
                      id="name"
                      required
                      onChange={handleChange}
                    ></input>
                    {errors.username && (
                      <div className="text-red-700 ps-2">
                        *{errors.username}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                      placeholder="name@abc.com"
                      required
                    />
                    {errors.email && (
                      <div className="text-red-700 ps-2">*{errors.email}</div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      onChange={handleChange}
                    ></input>
                    {errors.password && (
                      <div className="text-red-700 ps-2">
                        *{errors.password}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="confirm_password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      {" "}
                      Confirm Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm password"
                      id="confirm_password"
                      required
                      onChange={handleChange}
                    ></input>
                    {errors.confirm_password && (
                      <div className="text-red-700 ps-2">
                        *{errors.confirm_password}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex mt-5 w-full items-center justify-center rounded-md  bg-cblue px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
            {/* <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </span>
                Sign up with Facebook
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

SignUp.propTypes = {
  setSignin: PropTypes.func.isRequired,
}

export default SignUp
