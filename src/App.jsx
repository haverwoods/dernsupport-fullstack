import React from "react";
import Login from "./component/login";
import { Route, Routes } from "react-router-dom";
import Register from "./component/register";
import Homes, { Dashboard } from "./component/dashboard";




function app() {
  return(
  //   <>
  // <Login/>
  // <Register/>
  //   </>
 
  <Routes>
    
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>

  </Routes>
    
    
  )
}
export default app;