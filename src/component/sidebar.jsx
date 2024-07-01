import React from 'react'
import { FaBook } from 'react-icons/fa';
import { GiAutoRepair } from "react-icons/gi";
import { IoIosSettings, IoMdHome } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5';
import { MdHomeRepairService } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';

export const Sidebar = () => {

  const navigate = useNavigate()

  const homeClick = ()=>{
    navigate("/home");
  }
  const repairClick = ()=>{
    navigate("/Repairrequest");
  }
  const knowledgeClick = ()=>{
    navigate("/knowledge");
  }
  const notificationClick = ()=>{
    navigate("/notification");
  }
  const settingClick = ()=>{
    navigate("/setting");
  }

  return (
    <div className=' h-full   pb-10 color: bg-slate-500'>
    <div className=''>    
    <div className='item-center mt-3 mx-2 gap-1 flex text-xl font-semibold'>
    <GiAutoRepair className='h-8 w-8'/>
    <span>
       dern support
    </span>    
       </div>
       <div className=' mt-7 mr-3 left-0 m-0 flex flex-col gap-5 rounded-lg '>
         <span  onClick={homeClick}  className='item-center  gap-1 flex font-semibold hover:bg-black text-white uppercase rounded-lg px-2 cursor-pointer'><IoMdHome className='h-6 w-6'/>home</span>
         <span onClick={repairClick} className='item-center  gap-1 flex  font-semibold hover:bg-black text-white uppercase rounded-lg px-2 cursor-pointer'><MdHomeRepairService className='h-6 w-6'/>repair request</span>
         <span onClick={knowledgeClick} className='item-center  gap-1 flex  font-semibold hover:bg-black text-white uppercase rounded-lg px-2 cursor-pointer'><FaBook className='h5 w-5'/>knowledge base</span>
         <span onClick={notificationClick} className='item-center  gap-1 flex  font-semibold hover:bg-black text-white uppercase rounded-lg px-2 cursor-pointer'><IoNotifications className='h-6 w-6'/>notification</span>
         <span onClick={settingClick} className='item-center  gap-1 flex font-semibold hover:bg-black text-white uppercase rounded-lg px-2 cursor-pointer'><IoIosSettings className='h-6 w-6'/>setting</span>
         {/* //use array and map for the navigation  */}
       
       </div>
    </div>
    </div>
  )
  
}
export default Sidebar;