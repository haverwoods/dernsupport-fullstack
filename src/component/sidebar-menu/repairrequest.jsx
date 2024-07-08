import React from "react";
import Sidebar from "../sidebar";
import { MdOutlineDevices, MdOutlineDriveFolderUpload } from "react-icons/md";
import Layout from "../layout/layout";

export const Repairrequest = () => {
  return (
    // <div className="grid grid-cols-7 gap-0 bg-gray-800">
    //   <div className=" grid col-span-1 ">
    //     <Sidebar />
    //   </div>
      <Layout >
    {/* <div className="grid grid-cols-7 gap-0 bg-gray-800"> */}
    <div className="col-span-6">

      {/* <div className="col-start-2 col-end-11 h-screen ml-7 mt-5 text-white"> */}
      <div className=" h-screen ml-7 mt-5 text-black">
        <h1 className="text-xl mt-2 mx-12 uppercase">Repair request</h1>
        <div className=" bg-zinc-200 h-auto my-10 w-2/4 backdrop-blur-sm bg-opacity-50 border-b-2 ">
          <form action="">
            <div className=" ml-1 mr-5 mt-3  text-xl font-semibold">
              <h1 className="text-xl my-1 uppercase ml-5">enter date</h1>
              <input
                type="date"
                className="input-date bg-gray-200 outline-none border-none w-auto py-2 px-4  mx-5 mt-3 rounded-lg "
                required
              />
            </div>

            <div className=" mx-5 mt-3  gap-1  text-xl font-semibold">
              <div className="flex gap-3">
                <h1 className="text-xl mt-2 my-1 uppercase">
                  enter device name
                </h1>
                <MdOutlineDevices className="h-8 w-8 mt-2" />
              </div>
              <input
                type="text"
                className="block w-1/2 py-2 text-sm bg-white border-b-2 my-5 appearance-none text-black rounded-lg"
                placeholder="enter device name"
                required
              />
            </div>

            <div className="  input-box mx-5 mt-3  gap-1  text-xl font-semibold">
              <div className="flex gap-3">
                <h1 className="text-xl mt-2 my-1 uppercase">enter issue</h1>
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
             {/* <input className="button w-20 mb-4 text-[18px] mt-1 mx-7 rounded-full bg-cyan-500 text-white hover:bg-emerald-600 hover:text-white" type="file">
             
             </input>
              <input id="file_input" type="file"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">              
               
              </input> */}
              {/* //add drop zone */}
             
            </div>
          </form>
        </div>
      </div>
    </div>
      </Layout>
  );
}
export default Repairrequest;
