import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FaUserEdit, FaTrash, FaKey, FaStar } from "react-icons/fa"
import {getUserGroups } from "../redux/actions/groupActions"
import { Link, useNavigate } from "react-router-dom"
import girl from "../assets/girl.jpg"
import { v4 as uuidv4 } from "uuid"
import { RiBubbleChartFill } from "react-icons/ri"
import Modal from "react-modal"

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
//-----------------------Selectors-----------------------
  let user = useSelector((state) => state.auth.user)
  let groups = useSelector((state) => state.groups.grps)
  const { isAuthenticated } = useSelector((state) => state.auth)

//-----------------------State-----------------------
  let [error , setError] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [deleteAccModal, setDeleteAccModal] = useState(false)

//-----------------------useEffect-----------------------
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserGroups())
    }
  }
  , [isAuthenticated])



  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }
  const openDeleteAccModal = () => {
    setDeleteAccModal(true)
  }
  const closeDeleteAccModal = () => {
    setDeleteAccModal(false)
  }

  const handleDPchange = () => {
    // TODO: w8ing for backend
    alert("Change DP")
  }
  const handleDPdelete = () => {
    //TODO: w8ing for backend
    alert("Delete DP")
  }

  const handleChangePassword = () => {
    setModalIsOpen(true)
  }

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    const oldPassword = e.target.oldPassword.value
    const newPassword = e.target.newPassword.value
    const confirmNewPassword = e.target.confirmNewPassword.value

    if(oldPassword === "" || newPassword === "" || confirmNewPassword === "") {
      setError("All fields are required")
      return
    }else if (oldPassword === newPassword) {
      setError("New password cannot be the same as old password")
      return
    }else if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match")
      return 
    }else if (newPassword.length < 6) {
      setError("Password must be atleast 6 characters long")
      return
    }
    // TODO: w8ing for backend to verify old password and update new password
      setError(null)


    closeModal()
  }

  const handleDeleteAccount = () => {
    setDeleteAccModal(true)
  }

  const handleDeletion = (e) => {
    e.preventDefault()
    const password = e.target.password.value
    if(password === "") {
      setError("Password is required")
      return
    }
    else if(password !== user.password) {
      setError("Incorrect Password")
      return
    }
    // TODO: w8ing for backend to verify password and delete account
      setError(null)
    closeDeleteAccModal()
  }

  return isAuthenticated ? (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
          <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

          <Link
            href="#"
            className="flex items-center px-3 py-2.5 font-bold bg-white  text-cblue border rounded-full"
          >
            Profile Info
          </Link>
          <button
            onClick={handleChangePassword}
            className="flex items-center px-3 py-2.5 font-semibold  hover:text-cblue hover:border hover:rounded-full"
          >
            Change Password
          </button>
          <button
            onClick={handleDeleteAccount}
            className="flex items-center px-3 py-2.5 font-semibold hover:text-cblue hover:border hover:rounded-full  "
          >
            Delete Account
          </button>
        </div>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Change Password"
        className="flex items-center justify-center outline-none "
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: { width: "40vw", height: "40vh", margin: "auto" },
        }}
      >
        <div className="bg-white p-12 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Change Password</h2>
          {error && (
            <div className="bg-red-100 text-red-500 p-2 rounded text-sm mb-4 ">
              {error}
            </div>
          )}
          <form onSubmit={handleUpdatePassword}>
            <label className="block mb-2">
              <span className="text-gray-700">Old Password</span>
              <input
                type="password"
                name="oldPassword"
                className="mt-1 block w-full rounded-md ps-2  bg-gray-200 ring-1 shadow-sm"
                required
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">New Password</span>
              <input
                type="password"
                name="newPassword"
                className="mt-1 block w-full rounded-md ps-2 bg-gray-200 ring-1 shadow-sm"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Confirm New Password</span>
              <input
                type="password"
                name="confirmNewPassword"
                className="mt-1 block w-full rounded-md ps-2 bg-gray-200 ring-1 shadow-sm"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Change Password
            </button>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={deleteAccModal}
        onRequestClose={closeDeleteAccModal}
        contentLabel="Delete Account"
        className="flex items-center justify-center outline-none "
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: { width: "50vw", height: "40vh", margin: "auto" },
        }}
      >
        <div className="bg-white p-12 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Delete Account</h2>
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete your account?
          </p>
          {error && (
            <div className="bg-red-100 text-red-500 p-2 rounded text-sm mb-4 ">
              {error}
            </div>
            )  
          }
          <form onSubmit={handleDeletion}>
            {/* check for password */}
            <label className="block mb-6">
              <input
                type="password"
                name="password"
                placeholder="Enter your password to confirm deletion"
                className="mt-1 block w-full rounded-md ps-2  bg-gray-200 ring-1 shadow-sm"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete Account
            </button>
          </form>

        </div>
      </Modal>





      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              {" "}
              Profile Info
            </h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className=" flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <div className="relative">
                  <img
                    className=" object-cover w-40 h-40 p-1 rounded-full ring-2 ring-cblue dark:ring-indigo-500"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Bordered avatar"
                  />
                </div>

                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-cblue rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    onClick={handleDPchange}
                  >
                    Change picture
                  </button>
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-cblue focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-cblue focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    onClick={handleDPdelete}
                  >
                    Delete picture
                  </button>
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-cblue">
                <div className="mb-4">
                  <div className="block text-sm  text-gray-600 font-thin ">
                    Karma :
                  </div>
                  <div className="flex w-full gap-2  p-2.5  bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500   ">
                    <RiBubbleChartFill className="text-blue-500" />
                    <span className="text-sm text-gray-600">{user.karma}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full  space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="username"
                      className="block text-sm  text-gray-600 font-thin "
                    >
                      Username :
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      value={user.username}
                      required
                    />
                  </div>
                </div>
                <div className="mb-1 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm  text-gray-600 font-thin "
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    required
                    value={user.email}
                  />
                </div>
              </div>

              <div className="item-center mt-4">
                <h1 className="text-md font-bold mb-2">Groups</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {groups.map((group) => (
                    <div
                      className="group-item flex flex-col items-center "
                      key={uuidv4()}
                    >
                      <img
                        src={girl}
                        alt={group.group_name}
                        className="w-16 h-16 object-cover rounded-full mb-2"
                      />
                      <p className="text-sm text-center">{group.group_name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  ) : (
    <div className="flex items-center justify-center h-[75vh]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          You need to login to view this page
        </h2>
        <button
          onClick={() => {
            navigate("/")
          }}
          className="text-white py-2 px-4 uppercase rounded bg-cblue  shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mt-4"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Profile
