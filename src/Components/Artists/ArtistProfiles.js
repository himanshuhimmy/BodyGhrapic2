import React from "react";

import Artist from "../Assets/K6022.jpg";
import PortTattoo from "./PortTattoo";
const ArtistProfiles = () => {
  return (
    <div className="Black2 pt-32 pb-6">
      <div className="container w-full flex py-4">
        <div className="w-[70%]">
          <h1 className="text-3xl font-light my-2 yellowtext">Chinmay</h1>
          <p className="py-2 font-semibold whitetext">
            Tim started tattooing in 2008 and enjoys working in many styles.
            Illustrative neo-traditional tattoos are his main focus, but he is
            also confident in Japanese styles and realism.
          </p>
        </div>
        <div className="w-[30%] my-auto">
          <img
            src={Artist}
            className={`rounded-[5px] w-full`}
            alt="Tattoo studio interior"
          />
        </div>
      </div>
      <PortTattoo />
    </div>
  );
};

export default ArtistProfiles;
