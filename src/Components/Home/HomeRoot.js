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
          className="w-screen h-[85vh]"
          src={studioPhoto}
          alt="Tattoo studio interior"
        />
        <img
          className="absolute top-[30%] left-[25%] z-[1] w-[50%]"
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
