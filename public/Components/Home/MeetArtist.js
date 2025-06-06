import React from "react";
import Artist from "../Assets/K6022.jpg";
import { NavLink } from "react-router-dom";

const MeetArtist = () => {
  let Hover =
    "object-cover opacity-70 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-110";
  return (
    <div className="py-5 text-center Black2">
      <div className="container ">
        <h1 className="text-5xl font-light my-3 yellowtext max-[767px]:text-3xl max-[767px]:font-semibold">
          MEET THE TATTOO ARTIST
        </h1>
        <p className="py-5 font-semibold whitetext  max-[767px]:mx-5 ">
          We specialize in many different tattoo genres with each tattoo artist
          staying true to their expertise. We are always looking to break
          boundaries to provide you with a truly unique tattoo. We prefer
          working with our clients and collaborate on new ideas, or adding to
          existing ones, to achieve a finished product that leaves everyone
          satisfied. Our greatest reward is to leave you feeling proud with your
          new tattoo.
        </p>
        <div className="flex justify-center">
          <div className="">
            <div className="my-4 overflow-hidden rounded-[10px] w-[300px] ">
              <img
                src={Artist}
                className={`${Hover} rounded-[5px] max-w-72`}
                alt="Tattoo studio interior"
              />
            </div>
            <div className="">
              <h1 className="font-light my-3 yellowtext">Chinmay</h1>
              <NavLink to={"/ArtistProfiles"}>
                <button className="py-3 px-2 m-auto rounded-lg Yellow w-[40%]   hover:brightness-125 hover:saturate-150  transition duration-300 ">
                  View Potfolio
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetArtist;
