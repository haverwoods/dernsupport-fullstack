import React from "react";
import { FaBook, FaShoppingCart } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { IoIosSettings, IoMdHome } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const navigateRoute = (route) => {
    navigate(route);
  };

  const nav = [
    //dashbaord has been shifted to diifernt folder
    // {
    //   route: "/home",
    //   name: "admin dashboard",
    //   icon:<IoMdHome className="h-5 w-4" />

    // },
    {
      route: "/Repairrequest",
      name: "Repair request",
      icon: <MdHomeRepairService className="h-5 w-4" />,
    },
    {
      route: "/Order",
      name: "order",
      icon: <FaShoppingCart className="h-5 w-4" />,
    },
    {
      route: "/knowledge",
      name: "knowledge",
      icon: <FaBook className="h-5 w-4" />,
    },
    {
      route: "/notification",
      name: "notification",
      icon: <IoNotifications className="h-5 w-4" />,
    },
    {
      route: "/setting",
      name: "setting",
      icon: <IoIosSettings className="h-5 w-4" />,
    },
  ];

  return (
    <div className=" h-screen w-44  color: bg-stone-950 ">
      <div className="">
        <div className="item-center mt-3 mx-2 gap-1 flex text-xl font-semibold text-white">
          <GiAutoRepair className="h-8 w-8" />
          <span>dern support</span>
        </div>
        <div className=" mt-7 mr-3 left-0 m-0 flex flex-col gap-5 rounded-lg ">
          {nav?.map((nv, index) => (
            <span
              key={index} // Add a unique key here
              onClick={() => navigateRoute(nv.route)}
              className="item-center gap-1 flex hover:bg-gray-700 text-white rounded-lg px-2 cursor-pointer"
            >
              {nv.icon}
              {nv.name}
            </span>
          ))}

          {/* {nav?.map((nv) => (<span onClick={() => navigateRoute(nv.route)}
           className="item-center  gap-1 flex  hover:bg-gray-700  text-white  rounded-lg px-2 cursor-pointer">
                {nv.icon}
                {nv.name}
              </span>
            )
           
          )} */}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
