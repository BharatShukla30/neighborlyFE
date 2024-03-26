import  { useCallback, useEffect, useState } from "react"
import { BsPeople, BsSend } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { getChatMessages, getUserChats } from "../redux/actions/chatActions"
// import { getUserGroups } from "../redux/actions/userAction"
import girl from "../assets/girl.jpg"
import { IoLocationSharp } from "react-icons/io5"
import { FaCamera, FaPlus } from "react-icons/fa"
import { HiBellAlert } from "react-icons/hi2"
import { FaCircleUser } from "react-icons/fa6"
import { IoIosAttach } from "react-icons/io";
import Dropzone from "../components/Dropzone"
import {createGroup } from "../redux/actions/groupAction"

const Dashboard = () => {

  const [files, setFiles] = useState([])
  const [newGrp , setNewGrp] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles[0].size < 5000000 && acceptedFiles.length === 1){
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    }
  }, [])
  


  const { auth } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const [chats, setChats] = useState([])

  const [activeChat, setActiveChat] = useState(
    chats && chats.length > 0 ? chats[0] : {}
  )

  const [openRecentChats, setOpenRecentChats] = useState(true)
  const [openNewChatBox, setOpenNewChatBox] = useState(false)
  const [messages, setMessages] = useState([])



  // useEffect(() => {
  //   dispatch(getUserChats()).then((result) => setChats(result.payload.groups))
  // }, [])

  // useEffect(() => {
  //   if (activeChat && activeChat.group_id) {
  //     dispatch(getChatMessages(activeChat.group_id)).then((result) => {
  //       setActiveChat((chat) => {
  //         dispatch(getChatMessages(chat.group_id)).then((result) => {
  //           setMessages(result.payload)
  //         })
  //         return chat
  //       })
  //     })
  //   }
  // }, [activeChat])

  const [fileUpload , setFileUpload] = useState(false)

  const [grp , setGrp]  = useState({
    name: "",
    description: "",
    type: "",
    karma: 0,
    icon: ""
  })
 

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault()
      const message = e.target.value
      console.log(message)
      e.target.value = ""
    }
  }

  const handleGrpCreation = () => {
    setNewGrp(!newGrp)
  }

  const cancelGrp = () => {
    setGrp({
      name: "",
      description: "",
      type: "",
      karma: 0,
      icon: ""
    })
    setNewGrp(!newGrp)
  }

  const createGrp = (e) => {
    e.preventDefault()  
    console.log("create grp")
    // post info to server
    try{
      
      dispatch(createGroup(grp)).
      then((result) => {
        console.log(result)
      })
      
    }catch(err){
      console.log(err)
    }
    setNewGrp(false)
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      console.log(img)
      setGrp({...grp, icon: URL.createObjectURL(img)})
    }
  };













  return (
    <>
      <section className="flex max-h-screen  bg-chatBg ">
        {/* {openNewChatBox && <NewChat changeState={setOpenNewChatBox} />} */}

        {
          newGrp && (
            <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 z-50">
              <div className="bg-white  rounded-md p-5">
                <h1 className="text-2xl  text-cblue m-2 font-bold">Create New Group</h1>
                  <form className="my-5 max-w-md  ">
                    <div className="grid grid-col-6 gap-x-6 mx-auto ">
                      <div className="col-span-1 relative">
                        <label htmlFor="grpIcon" className="absolute text-black left-3 top-[10px] ">
                          <FaCamera  className="pointer-events-auto"/>
                        </label>
                        <input  type="file" accept="image/*" id="grpIcon" name="grpIcon"  onChange={handleImageChange}  className="opacity-5 bg-gray-400 rounded-full border h-10 w-10"  />
                        {grp.icon ? (<img src={grp.icon} alt="preview" className="absolute top-0 left-0 h-10 w-10 rounded-full border"/>) : (<div className="absolute pointer-events-none top-0 opacity-30 bg-gray-400 rounded-full border h-10 w-10"></div>)}
                      </div>
                      <div className="col-start-2 col-end-4 ">
                        <label htmlFor="Name" className="text-sm font-thin text-gray-600">Group Name</label>
                        <input type="text" name="Name" id="Name" className="ps-2 w-full py-1 border border-cblue rounded-md mb-2" required />
                        
                        <label htmlFor="Description" className="text-sm font-thin text-gray-600">Group Description</label>
                        <textarea name="Description" id="Description" cols="38" rows="2" className="ps-2 resize-none border border-cblue rounded mb-2"></textarea>

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                              <label htmlFor="type" className="text-[0.7rem] font-thin text-gray-600">Group Type</label>
                              <label htmlFor="type" className="inline-flex items-center p-1 rounded-md cursor-pointer dark:text-gray-100">
                                <input id="type" type="checkbox" className="hidden peer" />
                                <span className="px-2 py-[0.1rem] rounded-l-md dark:bg-cblue peer-checked:dark:bg-gray-600">Open</span>
                                <span className="px-2 py-[0.1rem] rounded-r-md dark:bg-gray-600 peer-checked:dark:bg-cblue">Close</span>
                              </label>
                            </div>
                            <div className="flex flex-col">
                              <label htmlFor="Karma" className="text-[0.7rem] font-thin text-gray-600">Karma Req.</label>
                              <input type="number" name="Karma" id="Karma" className="w-16 border border-cblue rounded-md px-2 text-gray-700" max={100}/>
                            </div>
                        </div>

                      </div>
                      <div className="col-start-3 col-end-6  text-sm mt-2">
                          <button onSubmit={createGrp} className="bg-cblue m-1 px-2 rounded-md py-[0.2rem] text-white">Create</button>
                          <button onClick={cancelGrp} className="bg-gray-300 m-1 px-2 rounded-md py-[0.2rem] text-black">Cancel</button>
                      </div>
                    </div>
                  </form>
         
              </div>
            </div>
          )
        }

        <aside
          className={`md:block flex md:w-[38vw] flex-col border-r bg-white px-5 `}
        >
          <div className="flex flex-1 flex-col justify-between">
            <nav className="-mx-4 space-y-6">
              <div className="space-y-3 ">
                <div className="mb-5 p-5 space-y-8 bg-indigo-300">
                  <div className="flex flex-row justify-between items-center">
                    <div className="img">
                      <img src={girl} className="rounded-full h-10 w-10" />
                    </div>
                    <div className="flex space-between gap-3 text-white text-bold">
                      <IoLocationSharp className="text-2xl pointer-events-auto" />
                      <button  onClick={handleGrpCreation}>
                        <FaPlus className="text-2xl"/>
                      </button>
                      <HiBellAlert className="text-2xl pointer-events-auto" />
                    </div>
                  </div>

                  <form className="max-w-md mx-auto">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only "
                    >
                      Search
                    </label>
                    <div className="relative rounded-full">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-2 ps-10 text-sm rounded-full text-black border border-gray-300 bg-white"
                        placeholder="Search "
                        required
                      />
                    </div>
                  </form>
                </div>

                <div className="flex  gap-x-3 items-center">
                  <button className="px-0.5 w-1/2">Nearby Groups</button>
                  <p>|</p>
                  <button className="px-0.5 w-1/2">Chats </button>
                </div>

                <hr />

                <div className="h-[60vh] overflow-y-scroll">
                  {/* TODO: mockup ,  */}
                  <div className="block ">
                    <div className="flex justify-between px-6 py-5 mb-2 border-b-2">
                      <div className="flex gap-3">
                        <img
                          src={girl}
                          alt="girl"
                          className="h-8 w-8 rounded-full"
                        />
                        <h1 className="font-light">John Doe</h1>
                      </div>
                      <button className="font-medium text-cblue hover:text-blue-800">
                        Join
                      </button>
                    </div>

                    <div className="flex justify-between px-6 py-5 mb-2 border-b-2">
                      <div className="flex gap-3">
                        <img
                          src={girl}
                          alt="girl"
                          className="h-8 w-8 rounded-full"
                        />
                        <h1 className="font-light">John Doe</h1>
                      </div>
                      <button className="font-medium text-cblue hover:text-blue-800">
                        Join
                      </button>
                    </div>

                    <div className="flex justify-between px-6 py-5 mb-2 border-b-2">
                      <div className="flex gap-3">
                        <img
                          src={girl}
                          alt="girl"
                          className="h-8 w-8 rounded-full"
                        />
                        <h1 className="font-light">John Doe</h1>
                      </div>
                      <button className="font-medium text-cblue hover:text-blue-800">
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        {/* Left Chatting Section */}
        <div
          className={`md:block w-full  ${
            openRecentChats ? "hidden w-screen" : "block"
          }`}
        >
          <div>
            <div className="shadow-lg py-3 px-3 flex items-center justify-between  bg-white z-40">
              <div className="text-xl font-medium flex items-center">
                <div className="me-3 md:me-4 bg-slate-200 px-3 py-3 rounded-full cursor-pointer">
                  <BsPeople />
                </div>
                <p className="font-medium capitalize">john</p>
              </div>
            </div>

            {/* Chats Section */}
            <div className=" py-5 bg-chatBg w-full items-stretch justify-stretch">
              <div className="h-[66vh] overflow-y-scroll px-4">
                <div className="flex flex-col w-full">
                  

                  {/* TODO: */}
                  <div className="flex item-start gap-2.5 my-4  w-full item-center  ">
                    <FaCircleUser className="w-8 h-8 rounded-full text-blue-600" />
                    <div className="flex justify-between items-center w-full leading-1.5 ">
                      <p className="text-sm font-normal py-2.5 px-4 text-left bg-blue-400 text-white border-gray-200 backdrop-blur-md rounded-e-xl rounded-es-xl  backdrop-brightness-125 shadow-md  ">
                        Simpsons adfadfkvj
                      </p>
                      <p className="text-sm ">
                        <span className="text-sm pr-3 font-normal text-gray-500 dark:text-gray-400 text-right">
                          11.45
                        </span>
                      </p>
                    </div>
                  </div>


                  <div className="flex item-start gap-2.5 my-4  w-full item-center  ">
                    <FaCircleUser className="w-8 h-8 rounded-full text-blue-600" />
                    <div className="flex justify-between items-center w-full leading-1.5 ">
                      <p className="text-sm font-normal py-2.5 px-4 text-left bg-blue-400 text-white border-gray-200 backdrop-blur-md rounded-e-xl rounded-es-xl  backdrop-brightness-125 shadow-md  ">
                        Miles Morales 
                      </p>
                      <p className="text-sm ">
                        <span className="text-sm pr-3 font-normal text-gray-500 dark:text-gray-400 text-right">
                          11.45
                        </span>
                      </p>
                    </div>
                  </div>





                </div>
              </div>

              {/* Message Input */}
              <div className=" flex items-center justify-center  sticky bottom-0 w-full bg-chatBg py-3">
                  <button className="h-10 w-10 me-5 rounded-full bg-slate-300 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <IoIosAttach className="mx-2 my-2 text-gray-600 font-bold text-2xl rotate-45" />
                    <Dropzone  />
                  </button>
                    <textarea
                      className=" resize-none pl-3 w-[60vw] lg:w-[40vw] py-3 rounded-md shadow-md"
                      placeholder="Type a message"
                      rows={1}
                      onKeyDown={handleEnterKey}
                      >
                      </textarea>
                <button
                  type="button"
                  className="ms-5 rounded-full bg-primary px-3 py-3 text-xl font-semibold text-white shadow-sm hover:bg-black-bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <BsSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
