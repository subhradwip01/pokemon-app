import React from "react";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-[100svh] relative">
      <Topbar/>
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
};

export default Layout;
