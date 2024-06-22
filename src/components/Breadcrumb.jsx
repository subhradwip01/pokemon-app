import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const currPath = location.pathname.split("/").join('/');
  return <div className="text-sky-500 text-[16px]">{currPath}</div>;
};

export default Breadcrumb;
