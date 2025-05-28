import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logos/Logo.png";

const Navigation = () => {
  return (
    <div className="navgation absolute z-[1] w-full py-5 bg-slate-600">
      <div className="container flex ">
        <div className="w-[40%] flex p-2 justify-around">
          <NavLink to={"/home"}>HOME</NavLink>
          <NavLink to={"/aboutus"}>ABOUT US</NavLink>
          <NavLink to={"/artists"}>ARTISTS</NavLink>
        </div>
        <div className="w-[20%]">
          <div className="w-[100%]">
            <img className="" src={Logo} />
          </div>
        </div>
        <div className="w-[40%] flex p-2 justify-around">
          <NavLink to={"/aftercare"}>AFTER CARE</NavLink>
          {/* <NavLink to={"/faq"}>FAQ</NavLink> */}
          <NavLink className="font-bold text-glow" to={"/AcademyRoot"}>
            Learn Tattoo
          </NavLink>
          <NavLink to={"/ContatRoot"}>CONTACT US</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
