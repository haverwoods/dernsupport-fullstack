import React from "react";
import { Route, Routes } from "react-router-dom";
import Repairrequest from "./component/sidebar-menu/repairrequest";
import Home from "./component/sidebar-menu/home";
import Notification from "./component/sidebar-menu/notification";
import Knowledge from "./component/sidebar-menu/knowledge";
import Setting from "./component/sidebar-menu/setting";
import Order from "./component/sidebar-menu/order";
import { Toaster } from "@/components/ui/toaster"
// import AuthProvider from './component/context/authcontext'


import Login from "./auth/login";
import Registration from "./auth/register";

function app() {
  return (
    
   
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ">
           <Toaster />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          {/* <Route path="/auth" element={<Auth/>}/> */}
          <Route path="/home" element={<Home />} />
          <Route path="/Repairrequest" element={<Repairrequest />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>

  );
}
export default app;
