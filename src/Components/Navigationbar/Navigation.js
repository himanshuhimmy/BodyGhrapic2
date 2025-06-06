import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import Logo from "../../../public/Assets/Logos/Logo.png";

import Logo from "../Assets/Logos/Logo.png";
import Menu from "../Assets/icons/menu.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  let [Tab, setTab] = useState(false);

  let NavMob = "px-3 my-1 rounded-lg ";
  function NavHandle() {
    setTab(!Tab);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let NavClass = scrolled
    ? `bg-black shadow-md transition-all duration-300 ease-in-out `
    : `transition-all duration-300 ${Tab ? "bg-black  " : ""}`;

  return (
    <div
      className={`navgation fixed font-bold z-[2] w-full  py-5 ${NavClass} `}
    >
      <div className="container flex max-[1023px]:justify-between max-[767px]:justify-between max-[767px]:mx-2 ">
        <div className="w-[40%] flex p-2 justify-around  max-[1023px]:hidden max-[767px]:hidden">
          <NavLink to={"/home"}>HOME</NavLink>
          <NavLink to={"/aboutus"}>ABOUT US</NavLink>
          <NavLink to={"/artists"}>ARTISTS</NavLink>
        </div>
        <div className="w-[20%] ">
          <div className="w-[100%]  max-[767px]:block  flex justify-center items-center">
            <img
              className={`transition-all duration-300 ease-in-out ${
                scrolled ? "w-[100px]" : "mt-5 scale-125"
              }`}
              src={Logo}
            />

            <img className="z-[1]" src="" />
          </div>
        </div>
        <div className="w-[40%] flex p-2 justify-around max-[1023px]:hidden max-[767px]:hidden">
          <NavLink to={"/aftercare"}>AFTER CARE</NavLink>
          <NavLink className="font-bold text-glow" to={"/AcademyRoot"}>
            Learn Tattoo
          </NavLink>
          <NavLink to={"/ContatRoot"}>CONTACT US</NavLink>
        </div>
        <div className="hidden w-[12%] max-[1023px]:flex justify-end  rounded-md">
          <button onClick={NavHandle}>
            <img className="w-full max-[1023px]:h-20" src={Menu} alt="menu" />
          </button>
        </div>
      </div>

      {Tab && (
        <div className="Black w-full max-[1023px]:px-6 flex flex-col justify-end transition-all  duration-500 py-3 ">
          <NavLink onClick={NavHandle} className={NavMob} to={"/home"}>
            HOME
          </NavLink>
          <NavLink onClick={NavHandle} className={NavMob} to={"/aboutus"}>
            ABOUT US
          </NavLink>
          <NavLink onClick={NavHandle} className={NavMob} to={"/artists"}>
            ARTISTS
          </NavLink>
          <NavLink onClick={NavHandle} className={NavMob} to={"/aftercare"}>
            AFTER CARE
          </NavLink>
          <NavLink
            onClick={NavHandle}
            className={`font-bold text-glow ${NavMob}`}
            to={"/AcademyRoot"}
          >
            Learn Tattoo
          </NavLink>
          <NavLink onClick={NavHandle} className={NavMob} to={"/ContatRoot"}>
            CONTACT US
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navigation;
