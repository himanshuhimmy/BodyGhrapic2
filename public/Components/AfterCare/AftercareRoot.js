import React from "react";
import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import care from "./CareData";
import Bg from "../Assets/Bg/BgBlack.jpg";

const AftercareRoot = () => {
  return (
    <div>
      <div className="w-full  overflow-hidden">
        <img
          className="w-screen h-[100vh] max-[1023px]:h-auto max-[767px]:h-auto"
          src={studioPhoto}
          alt="Tattoo studio interior"
        />

        <div
          style={{ backgroundImage: `url(${Bg})` }}
          className=" bg-cover Black py-10"
        >
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-5 yellowtext max-[1023px]:text-4xl max-[767px]:text-3xl">
              After Care
            </h1>
            {care.map((el, id) => (
              <div
                key={id}
                className="flex py-4 w-full max-[1023px]:block max-[767px]:block"
              >
                {id % 2 === 0 ? (
                  <>
                    <div className="w-[40%] max-[1023px]:w-[75%] max-[1023px]:m-auto max-[767px]:w-[95%] max-[767px]:m-auto ">
                      <img
                        className="rounded-3xl h-64 max-[1023px]:h-72 w-full px-2"
                        src={el.img}
                        alt="Tattoo studio interior"
                      />
                    </div>
                    <div className="w-[60%] max-[1023px]:w-[70%] max-[1023px]:m-auto  max-[767px]:w-[90%] max-[767px]:m-auto">
                      <h1 className="text-2xl font-light my-2 whitetext max-[1023px]:my-1 max-[767px]:my-1">
                        {el.heading}
                      </h1>
                      <p className="py-5 px-5 font-semibold whitetext max-[767px]:py-1">
                        {el.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[60%] max-[1023px]:w-[70%] max-[1023px]:m-auto max-[767px]:w-[90%] max-[767px]:m-auto">
                      <h1 className="text-2xl font-light my-2 whitetext">
                        {el.heading}
                      </h1>
                      <p className="py-5 px-5 font-semibold whitetext">
                        {el.description}
                      </p>
                    </div>
                    <div className="w-[40%] max-[1023px]:w-[75%] max-[1023px]:m-auto max-[767px]:w-[95%] max-[767px]:m-auto">
                      <img
                        className="rounded-3xl h-64 w-full px-2"
                        src={el.img}
                        alt="Tattoo studio interior"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AftercareRoot;
