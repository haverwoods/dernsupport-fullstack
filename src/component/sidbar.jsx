import React from 'react'
import { GiAutoRepair } from "react-icons/gi";

export const Sidebar = () => {
  return (
    <div className=' h-full   pb-10 color: bg-slate-500'>
    <div className=''>    
    <div className='item-center mt-3 mx-2 gap-1 flex text-xl font-semibold'>
    <GiAutoRepair className='h-8 w-8'/>
    <span>
       repair hub
    </span>    
       </div>
       <div className=' mt-7 mx-3 left-0 m-0 flex flex-col gap-3 rounded-lg '>
         <a href=''className='hover:bg-black text-white uppercase rounded-lg px-2'>home</a>
         <a href=''className='hover:bg-black text-white uppercase rounded-lg px-2'>repair request</a>
         <a href=''className='hover:bg-black text-white uppercase rounded-lg px-2'>knowledge base</a>
         <a href=''className='hover:bg-black text-white uppercase rounded-lg px-2'>notification</a>
         <a href=''className='hover:bg-black text-white uppercase rounded-lg px-2'>setting</a>
         
       
       </div>
    </div>
    </div>
  )
  
}
export default Sidebar;