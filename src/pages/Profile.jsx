import { useState } from "react"
import { FaUserEdit, FaTrash, FaKey, FaStar } from "react-icons/fa"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    username: "johndoe",
    email: "JohnDoe@gmail.com",
    location: "Lagos, Nigeria",
    phone: "+234 123 456 7890",
    dateJoined: "12th May, 2021",
    avatar: ""
  })

  const handleAvatarSelection = () => {

      console.log("Avatar selected")
    
  }

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img src={user.avatar} alt="avatar" className="w-32 h-32 rounded-full" />
              <button onClick={handleAvatarSelection} className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 mr-4">
                <FaUserEdit />
              </button>
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button onClick={() => setIsEditing(!isEditing)} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Edit Profile
            </button>
            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Delete Account
            </button>
          </div>
        </div>

        <div className="mt-8 text-center bg-gray-100 p-10 rounded-lg shadow-lg">
         

          {isEditing ? (
            <form className="m-5 flex flex-col">
              <label
                htmlFor="username"
                className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <span className="text-sm text-left font-medium text-gray-500">
                  Username:
                </span>
                <input
                  type="text"
                  name="username"
                  className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2 p-1"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </label>
              <label
                htmlFor="email"
                className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <span className="text-sm text-left font-medium text-gray-500">
                  Email:
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2 p-1"
                  value={user.email}
                  onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                  }
                  disabled
                />
              </label>
              <label
                htmlFor="location"
                className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <span className="text-sm text-left font-medium text-gray-500">
                  Location:
                </span>
                <input
                  type="text"
                  name="location"
                  className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2 p-1"
                  value={user.location}
                  onChange={(e) =>
                    setUser({ ...user, location: e.target.value })
                  }
                />
              </label>
              <label
                htmlFor="phone"
                className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <span className="text-sm text-left font-medium text-gray-500">
                  Phone:
                </span>
                <input
                  type="text"
                  name="phone"
                  className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2 p-1"
                  value={user.phone}
                  onChange={(e) =>
                    setUser({ ...user, phone: e.target.value })
                  }
                />
              </label>
              <label
                htmlFor="dateJoined"
                className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <span className="text-sm text-left font-medium text-gray-500">
                  Date Joined:
                </span>
                <input
                  type="date"
                  name="dateJoined"
                  className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2 p-1"
                  value={user.dateJoined}
                  onChange={(e) =>
                    setUser({ ...user, dateJoined: e.target.value })
                  }
                  disabled
                />
              </label>
            </form>
          ) : (
            <>
              <div className="m-5">
                <div className="border-t border-gray-200">
                  <dl>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm text-left font-medium text-gray-500">
                        Username
                      </dt>
                      <dd className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.username}
                      </dd>
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm text-left font-medium text-gray-500">
                        Email
                      </dt>
                      <dd className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.email}
                      </dd>
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm text-left font-medium text-gray-500">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.location}
                      </dd>
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm text-left font-medium text-gray-500">
                        Phone
                      </dt>
                      <dd className="mt-1 text-sm  text-left text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.phone}
                      </dd>
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm text-left font-medium text-gray-500">
                        Date Joined
                      </dt>
                      <dd className="mt-1 text-sm text-left  text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.dateJoined}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
