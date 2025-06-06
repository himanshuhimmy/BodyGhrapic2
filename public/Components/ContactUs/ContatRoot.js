import React from "react";
import Contactus from "./Contactus";
import studioPhoto from "../Assets/Studio/IMG_5917.JPG";

const ContatRoot = () => {
  return (
    <div>
      <div className="w-full  overflow-hidden">
        <img
          className="w-screen h-[85vh] max-[1023px]:h-auto max-[767px]:h-auto"
          src={studioPhoto}
          alt="Tattoo studio interior"
        />
      </div>
      <Contactus />
    </div>
  );
};

export default ContatRoot;
