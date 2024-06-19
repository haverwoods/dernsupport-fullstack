import React from 'react'
import { GiAutoRepair } from "react-icons/gi";

export const Sidebar = () => {
  return (
    <div className='fixed h-screen w-52  md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 color: bg-slate-500'>
    <div className=''>    
    <div className='item-center mt-3 ml-3 gap-1 flex text-xl font-semibold'>
    <GiAutoRepair className='h-8 w-8'/>
    <span>
       repair hub
    </span>    
       </div>
       <div className='fixed mt-7 ml-3 left-0 m-0 flex flex-col text-white uppercase gap-3 hover:bg-black'>
    <i>home</i>
    <i>repair request</i>
    <i>knowledge base</i>
    <i>notification</i>
    <i>setting</i>
       </div>
    </div>
    </div>
  )
  
}
export default Sidebar;