import React from 'react'
import { GiAutoRepair } from "react-icons/gi";

export const Sidebar = () => {
  return (
    <div className=' h-screen   pb-10 color: bg-slate-500'>
    <div className=''>    
    <div className='item-center mt-3 ml-3 gap-1 flex text-xl font-semibold'>
    <GiAutoRepair className='h-8 w-8'/>
    <span>
       repair hub
    </span>    
       </div>
       <div className='fixed mt-7 ml-3 left-0 m-0 flex flex-col  gap-3 '>
         <a href='' className='hover:bg-black text-white uppercase'>home</a>
         <a href=''className='hover:bg-black text-white uppercase'>repair request</a>
         <a href=''className='hover:bg-black text-white uppercase'>knowledge base</a>
         <a href=''className='hover:bg-black text-white uppercase'>notification</a>
         <a href=''className='hover:bg-black text-white uppercase'>setting</a>
       
       </div>
    </div>
    </div>
  )
  
}
export default Sidebar;