import React from "react";
import { FaBook } from "react-icons/fa";
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
    {
      route: "/home",
      name: "Home",
      icon:<IoMdHome className="h-6 w-6" />

    },
    {
      route: "/Repairrequest",
      name: "Repair request",
      icon:<MdHomeRepairService className="h-6 w-6" />
    },
    {
      route: "/knowledge",
      name: "knowledge",
      icon:<FaBook className="h-6 w-6" />
    },
    {
      route: "/notification",
      name: "notification",
      icon:<IoNotifications className="h-6 w-6" />
    },
    {
      route: "/setting",
      name: "setting",
      icon:<IoIosSettings className="h-6 w-6" />
    },
  ];

  return (
    <div className=" h-full   pb-10 color: bg-cyan-200">
      <div className="">
        <div className="item-center mt-3 mx-2 gap-1 flex text-xl font-semibold">
          <GiAutoRepair className="h-8 w-8" />
          <span>dern support</span>
        </div>
        <div className=" mt-7 mr-3 left-0 m-0 flex flex-col gap-5 rounded-lg ">
          {nav?.map(
            (nv) => (
              <span
                onClick={() => navigateRoute(nv.route)}
                className="item-center  gap-1 flex font-semibold hover:bg-sky-400  text-black uppercase rounded-lg px-2 cursor-pointer"
              >
                {nv.icon}
                {nv.name}
              </span>
            )
           
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
