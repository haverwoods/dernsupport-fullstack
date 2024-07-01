import React from "react";
import Login from "./component/login";
import { Route, Routes } from "react-router-dom";
import Register from "./component/register";
import Repairrequest from "./component/sidebar-menu/repairrequest";
import Home from "./component/sidebar-menu/home";
import Notification from "./component/sidebar-menu/notification";
import Knowledge from "./component/sidebar-menu/knowledge";
import Setting from "./component/sidebar-menu/setting";





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
    <Route path="/home" element={<Home/>}/>
    <Route path="/Repairrequest" element={<Repairrequest/>}/>
    <Route path="/knowledge" element={< Knowledge/>}/>
    <Route path="/notification" element={< Notification/>}/>
    <Route path="/setting" element={<Setting/>}/>

  </Routes>
    
    
  )
}
export default app;