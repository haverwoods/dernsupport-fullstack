// import React from "react";
// import Sidebar from "../sidebar";

// // Pass the child props
// export default function Layout(props) {
//   return (
//     <div className="grid grid-cols-7 gap-0 bg-white border-b-2 ">
//       {/* display the child prop */}
//       <Sidebar classname="grid col-span-1"/>
//       {props.children}
//     </div>
//   );
// }
import React from "react";
import Sidebar from "../sidebar";

// Pass the child props
export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* display the child prop */}
      <Sidebar className="fixed" />
      {children}
    </div>
  );
}