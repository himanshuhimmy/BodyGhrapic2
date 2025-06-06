import React from "react";
import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import AboutStudio from "./AboutStudio";
import MeetArtist from "./MeetArtist";
import RecentProjects from "./RecentProjects";
import Testimonal from "./Testimonal";
import Contactus from "../ContactUs/Contactus";
import Cafename from "../Assets/Logos/name.png";

const HomeRoot = () => {
  return (
    <div className="w-full">
      <div className="w-full  overflow-hidden">
        <img
          className="w-screen h-[85vh] max-[1023px]:h-auto max-[767px]:h-auto"
          src={studioPhoto}
          alt="Tattoo studio interior"
        />
        <img
          className="absolute top-[30%] left-[25%] z-[1] w-[50%] max-[1023px]:w-[70%] max-[1023px]:left-[16%] max-[1023px]:top-[18%] max-[1279px]:top-[33%] max-[767px]:top-[12%] max-[767px]:w-[80%] max-[767px]:left-[10%]"
          src={Cafename}
          alt="Tattoo studio interior"
        />
      </div>
      <AboutStudio />
      <MeetArtist />
      <RecentProjects />
      <Testimonal />
      <Contactus />
    </div>
  );
};

export default HomeRoot;
