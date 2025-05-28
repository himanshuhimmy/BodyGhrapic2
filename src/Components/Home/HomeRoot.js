import React from "react";
import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import AboutStudio from "./AboutStudio";
import MeetArtist from "./MeetArtist";
import RecentProjects from "./RecentProjects";
import Testimonal from "./Testimonal";
import Contactus from "../ContactUs/Contactus";

const HomeRoot = () => {
  return (
    <div className="w-full">
      <div className="w-full  overflow-hidden">
        <img
          className="w-screen h-[85vh]"
          src={studioPhoto}
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
