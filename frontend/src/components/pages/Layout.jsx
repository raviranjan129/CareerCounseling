import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <Header /> 
      <Outlet /> 
    </div>
  );
};

export default Layout;
