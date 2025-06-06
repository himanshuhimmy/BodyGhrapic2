import React, { useEffect, useRef, useState } from "react";
import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import WatsLogo from "../Assets/Socials/Wats.png";
import ModalRoot from "../ReusableComponents/ModalRoot";
import FormAcad from "./FormAcad";

const AcademyRoot = () => {
  let AcademyJoin = useRef();

  const texts = ["Passion", "Art", "Destiny", "Dream"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  let ClickHandle = () => {
    AcademyJoin.current.open();
  };

  return (
    <div
      className="Black h-[85vh] w-full  bg-cover "
      style={{ backgroundImage: `url(${studioPhoto})` }}
    >
      <ModalRoot Button="Cancel" ref={AcademyJoin}>
        <FormAcad />
      </ModalRoot>
      <div className="relative top-[35%] w-full ">
        <div className="max-[1023px]:w-[80%] max-[1279px]:w-[60%]  max-[767px]:w-[85%]  container p-10 w-[40%] Black2  ">
          <div className="w-[65%] max-[1023px]:w-full max-[767px]:w-full ">
            <div className="text-left">
              <h2 className="whitetext text-3xl font-light mb-3 max-[767px]:mb-1 ">
                Discover,
              </h2>
              <h1 className="whitetext text-5xl font-bold max-[1023px]:text-4xl  max-[767px]:text-2xl max-[767px]:font-semibold">
                The Artist in You
              </h1>
              <p className="py-5 text-2xl font-semibold whitetext max-[767px]:py-2 max-[767px]:pt-0 max-[767px]:font-semibold">
                Come, Ink your {texts[index]}
              </p>
            </div>
            <div className="flex  w-[70%] max-[767px]:w-full">
              <div className="w-[70%] flex justify-around max-[767px]:w-full  max-[767px]:justify-between">
                <div className="w=[70%] ">
                  <button
                    onClick={ClickHandle}
                    className="p-3 rounded-lg Yellow whitetext  hover:brightness-125 hover:saturate-150  transition duration-300  max-[767px]:font-semibold "
                  >
                    Book a free oreantation
                  </button>
                </div>
                <div className="w-[30%] items-center">
                  <a href="https:/wa.me/918805300532?text=Hello, I’d like to schedule a professional inquiry call.">
                    <img src={WatsLogo} className="h-11 w-11  items-center  " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyRoot;
