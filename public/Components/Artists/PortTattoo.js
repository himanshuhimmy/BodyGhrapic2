import React from "react";

import tattooTypes from "../TypesOfTattoo/TattoosData";

const PortTattoo = () => {
  return (
    <div className="Black">
      <div className="container py-6 w-full">
        <h1 className="text-5xl whitetext text-center max-[1023px]:text-4xl max-[1023px]:mb-4 max-[767px]:text-2xl max-[767px]:font-semibold">
          Chinmay's PORTFOLIO
        </h1>
        <div className="flex w-full  flex-wrap ">
          {tattooTypes.map((el) => {
            return (
              <div
                id={el.id}
                className="w-[25%] p-6 m-auto max-[1023px]:w-[45%] max-[1023px]:p-3 max-[1023px]:m-auto max-[767px]:p-2 max-[767px]:w-[50%]"
              >
                <img className="w-full h-52" src={el.image} />
                <h1 className="text-2xl font-light my-1 whitetext">
                  {el.name}
                </h1>
                <p className="py-1 font-semibold whitetext">{el.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortTattoo;
