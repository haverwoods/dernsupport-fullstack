import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


 const Register = () => {
  const check = () => {
    //code to check username and password
      
  };
  return (
   
    <div className="flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen" >
    <div  className='container bg-slate-400 h-3/4 w-72 mt-8 mr-10 ml-10 backdrop-blur-sm bg-opacity-50'>
    <form action="">
      <h1 className='text-2xl mt-2 mx-12'>create account</h1>

      <div className='input-box mt-7 mx-5'>
      <FaUser />
        <input type = "text" className='block w-full py-2 text-sm bg-transparent border-b-2  appearance-none' placeholder= "enter your name" required/>          
      </div>

      <div className='input-box mt-4 mx-5'>
      <RiLockPasswordFill />
        <input type = "password" className='block w-full py-2 text-sm bg-transparent border-b-2 border-gray-300 appearance-none' placeholder= "enter password" required/>          
      </div>

      <div className='input-box mt-4 mx-5'>
      <RiLockPasswordFill />
        <input type = "password" className='block w-full py-2 text-sm bg-transparent border-b-2 border-gray-300 appearance-none' placeholder= "confirm password" required/>          
      </div>

      <div className="mt-6">
          <span className="mx-2 my-[10px]"> Already have an account</span>
          <a href="/login">
            <span className="mx-2 mt-8 text-blue-700">click here</span>
          </a>
          </div>

      <button className='button w-48 mb-4 text-[18px] mt-6 mx-7 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white'  onClick={check}>register</button>
      
      </form>
 
        
    </div>
    </div>
  
  ) 
}
 export default Register;