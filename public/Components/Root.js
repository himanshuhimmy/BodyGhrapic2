import React from "react";
import Navigation from "./Navigationbar/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./ReusableComponents/Footer";

const Root = () => {
  return (
    <div className="">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
