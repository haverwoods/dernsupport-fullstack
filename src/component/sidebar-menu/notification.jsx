import React from 'react'
import Sidebar from '../sidebar';

export const Notification = () => {
  return (
    <div className="grid grid-cols-7 gap-0 bg-gray-800">
    <div className=" grid col-span-1 ">
      <Sidebar />
      </div>
      <div className="col-start-2 col-end-11 h-screen ml-7 mt-5 text-white">
      <h1 className="text-2xl mt-2 mx-12 uppercase">notification is under maintainance</h1>
        
      </div>   
    </div>
  )
}
export default Notification;