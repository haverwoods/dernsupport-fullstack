import React from "react";
import { MdOutlineDevices, MdOutlineDriveFolderUpload } from "react-icons/md";
import Layout from "../layout/layout";
import { IoCloudUploadOutline } from "react-icons/io5";

export const Repairrequest = () => {
  return (
    <Layout>
      <div className=" bg-gray-500">
        <div className=" absolute h-screen w-auto  mt-1 text-black ">
          <h1 className=" mt-0 mx-72 underline uppercase">
            Repair request
          </h1>
          <div className=" bg-gray-300 h-auto w-96 my-2 mx-48  backdrop-blur-sm bg-opacity-50 border-b-2 rounded-lg ">
            <form action="">
              <div className=" ml-1 mr-5 mt-0   font-semibold">
                <h1 className=" my-1 ml-5 uppercase">enter date</h1>
                <input
                  type="date"
                  className="input-date bg-gray-200 outline-none border-none w-auto py-2 px-4  mx-5 mt-1 rounded-lg "
                  required
                />
              </div>

              <div className=" mx-5 mt-2  gap-1 font-semibold">
                <div className="flex gap-3">
                  <h1 className=" mt-2 my-1 uppercase">
                    enter device name
                  </h1>
                  <MdOutlineDevices className="h-8 w-8 mt-2" />
                </div>
                <input
                  type="text"
                  className="block w-1/2 py-2 text-sm bg-white border-b-2 my-1 appearance-none text-black rounded-lg"
                  placeholder="enter device name"
                  required
                />
              </div>

              <div className="  input-box mx-5 mt-3  gap-1  font-semibold">
                <div className="flex gap-3">
                  <h1 className=" mt-2 my-1 uppercase">enter issue</h1>
                  <MdOutlineDevices className="h-8 w-8 mt-2" />
                </div>
                <input
                  type="text"
                  className="block w-full max-w-lg h-full max-h-80  py-2 text-sm bg-white border-b-2 my-5 appearance-none text-black rounded-lg"
                  placeholder="enter your issue"
                  required
                />
              </div>

              <div className="  input-box mx-5 mt-3  gap-1  text-xl font-semibold">
                <div className="flex gap-3">
                  <h1 className="text-xl mt-2 my-1 uppercase">upload pic</h1>
                </div>
                {/* //add drop zone */}
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">          
                      <IoCloudUploadOutline className="w-10 h-10 mb-3 text-gray-400"/>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      {/* <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p> */}
                      {/* //use array to save the selected data and display that data */}
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
              <div className="button bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold ml-7 mb-3 mt-5 py-2 px-4 rounded-full">
                submit
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Repairrequest;
