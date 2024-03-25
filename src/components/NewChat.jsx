import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { ImLocation } from "react-icons/im";
import Location from "../assets/location.svg"

export default function Example(props) {
  // const [open, setOpen] = useState()
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value.trim()});    
  }

  const handleForm = (e) => {
    e.preventDefault();
    const validationErrors = {}
    if(!formData.name.trim()){
      validationErrors.name = "This field is required";
    }
    if(!formData.description.trim()){
      validationErrors.description = "This field is required";
    }

    setErrors(validationErrors);
    
    if(Object.keys(validationErrors).length == 0){
      console.log(formData);
    }
  }


  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.changeState}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 backdrop-blur-sm bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >

              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-w-sm w-full sm:w-full sm:max-w-lg">
                
                <div className="hidden flex justify-center flex-col items-center py-10 px-5">
                  <div className="text-center">
                    <svg className="animate-bounce w-14 h-14 text-4xl"> <ImLocation /></svg>
                  </div>
                  <div className="text-xl font-semibold">
                    Finding Nearby Users
                  </div>

                </div>

                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    
                    <div className="mt-3 sm:ml-4 sm:mt-0 text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg text-center font-semibold leading-6 text-gray-900"
                      >
                        New Chat
                      </Dialog.Title>
                      <div className="mt-2">
                        <form onSubmit={handleForm}>
                          <div className="w-full">
                            <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
                              htmlFor="name"
                            >
                              Group Name
                            </label>
                            <input
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              placeholder="Enter Topic of group"
                              id="name"
                              name="name"
                              onChange={handleChange}
                            ></input>
                            {errors.name && <p className="mt-1 text-xs text-red-600">
                              *This field is required
                            </p>}
                          </div>

                          <div className="w-full mt-3">
                            <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
                              htmlFor="name"
                            >
                              Description
                            </label>
                            <textarea
                              className=" w-full rounded-md border border-black/30 bg-transparent resize-none px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              rows={3}
                              name="description"
                              placeholder="Describe your topic..."
                              id="description"
                              onChange={handleChange}
                            ></textarea>
                            {errors.description &&
                            <p className="mt-1 text-xs text-red-600">
                              *This field is required
                            </p>}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleForm}
                    
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => props.changeState(false)}

                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
