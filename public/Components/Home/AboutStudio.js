import React from "react";
import Tattoo from "../Assets/K6022.jpg";

const AboutStudio = () => {
  return (
    <div className="Black">
      <div className="container self-center flex w-full py-14 max-[1023px]:block max-[767px]:block">
        <div className="w-[50%] max-[1023px]:w-[85%] max-[1023px]:m-auto max-[767px]:w-[90%] max-[767px]:m-auto">
          <h1 className="text-5xl font-light my-3 yellowtext max-[767px]:text-2xl max-[767px]:my-1 max-[767px]:font-bold">
            BODY GHRAPICS TATTOO CAFE
          </h1>
          <p className="py-5 font-semibold whitetext max-[1023px]:py-2 max-[767px]:py-2">
            We are are located on 3056 N. Clybourne Ave. We are open 7 days a
            week from 12PM 8PM. You can make an appointment through our form
            below or by calling (773) 857-0609.
          </p>
          <p className="py-5 font-semibold whitetext max-[767px]:py-1">
            The shop is owned by Rob Goodkind. Rob is a highly acclaimed tattoo
            artist, and he is one of Chicago’s very own. The entire team is
            dedicated to always growing with the tattoo industry, embracing new
            techniques, and offering both full color and grey colors tattoos.
          </p>
        </div>
        <div className=" w-[50%] max-[1023px]:m-auto max-[767px]:w-[80%] max-[767px]:m-auto">
          <div className="p-2 flex justify-center items-center w-[100%]">
            <img
              className="rounded-full w-[21rem] h-[21rem]  object-cover "
              src={Tattoo}
              alt="Tattoo equipment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStudio;
