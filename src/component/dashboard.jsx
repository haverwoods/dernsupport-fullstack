import React from "react";
import Sidebar from "./sidbar";
import { MdOutlineDevices, MdOutlineDriveFolderUpload } from "react-icons/md";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-7 gap-0 bg-slate-900">
      <div className=" grid col-span-1 ">
        <Sidebar />
      </div>

      {/* <div className='ml-56 h-screen bg-slate-900 text-white'> */}
      <div className="col-start-2 col-end-11 h-screen ml-7 mt-5 text-white">
        <div className=" bg-slate-400 h-auto my-10 mx-10 backdrop-blur-sm bg-opacity-50">
          <form action="">
            {/* <h1 className='text-2xl mt-2 mx-12'>home</h1> */}

            {/* <div className='input-date bg-slate-300 outline-none border-none w-10 py-4 px-4 rounded-lg' required>    
        
          </div> */}
             <div className=" ml-1 mr-5 mt-3  text-xl font-semibold">
             <h1 className="text-xl my-1 uppercase ml-5" >
                  enter date
                </h1>
            <input
              type="date"
              className="input-date bg-slate-300 outline-none border-none w-auto py-2 px-4  mx-5 mt-3 rounded-lg "
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
              <button
                className="button w-20 mb-4 text-[18px] mt-6 mx-7 rounded-full bg-cyan-500 text-white hover:bg-emerald-600 hover:text-white"
                type="submit"
              >
                <MdOutlineDriveFolderUpload className="h-8 w-8 mx-5" />
              </button>
              {/* <input type = "text" className='block w-1/2 py-2 text-sm bg-white border-b-2 my-5 appearance-none text-black rounded-lg' placeholder= "enter device name" required/>           */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
