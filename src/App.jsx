import React from "react";
import { Route, Routes } from "react-router-dom";
import Repairrequest from "./component/sidebar-menu/repairrequest";
import Home from "./component/sidebar-menu/home";
import Notification from "./component/sidebar-menu/notification";
import Knowledge from "./component/sidebar-menu/knowledge";
import Setting from "./component/sidebar-menu/setting";
import Order from "./component/sidebar-menu/order";
import Login from "./component/login-regs/login";
import Register from "./component/login-regs/register";






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
    <Route path="/Order" element={<Order/>}/>

  </Routes>
    
    
  )
}
export default app;