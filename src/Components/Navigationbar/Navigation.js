import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logos/Logo.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let NavClass = scrolled
    ? "bg-black shadow-md transition-all duration-300 ease-in-out "
    : "transition-all duration-300";

  return (
    <div className={`navgation fixed font-bold z-[2] w-full py-5 ${NavClass} `}>
      <div className="container flex ">
        <div className="w-[40%] flex p-2 justify-around">
          <NavLink to={"/home"}>HOME</NavLink>
          <NavLink to={"/aboutus"}>ABOUT US</NavLink>
          <NavLink to={"/artists"}>ARTISTS</NavLink>
        </div>
        <div className="w-[20%]">
          <div className="w-[100%]  flex justify-center items-center">
            <img
              className={`transition-all duration-300 ease-in-out ${
                scrolled ? "w-[100px]" : "mt-5 scale-125"
              }`}
              src={Logo}
            />

            <img className="z-[1]" src="" />
          </div>
        </div>
        <div className="w-[40%] flex p-2 justify-around">
          <NavLink to={"/aftercare"}>AFTER CARE</NavLink>
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
