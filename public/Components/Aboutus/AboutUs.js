import React from "react";
import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import Tattoo from "../Assets/K6022.jpg";
const AboutUs = () => {
  let Pclass =
    "font-semibold whitetext text-center py-6 max-[1023px]:mx-5  max-[767px]:mx-3";

  const divStyle = {
    backgroundImage: `url(${studioPhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="w-full  overflow-hidden">
        <img
          className="w-screen h-[85vh] max-[1023px]:h-auto max-[767px]:h-auto"
          src={studioPhoto}
          alt="Tattoo studio interior"
        />
      </div>

      <div className="Black py-5">
        <div className="container">
          <p className={Pclass}>
            In the tattoo business, being a good tattoo artist calls for a lot
            of skill and commitment to giving utterly the best kind of art which
            can rival others. The fact of the matter is, not everyone can become
            exceptional tattoo artists. The ones that have already made it in
            the business, such names as Carolina Mansur, Rob Goodkind, and Tim
            Derose, have that something that makes them each tick and become the
            best that they are. So don’t let anyone fool you that desire alone
            is all that you need to get in the game. That said, what makes us
            stand out from the rest?
          </p>
        </div>
      </div>
      <div
        className={`bg-gradient-to-b overflow-hidden from-black to-transparent  py-8 relative h-70vh  max-[767px]:h-auto`}
      >
        <div className="w-full  overflow-hidden absolute">
          <img
            className="w-full h-full  object-cover relative mix-blend-overlay  max-[767px]:h-auto"
            src={studioPhoto}
            alt="Tattoo studio interior"
          />
        </div>
        <div className="container py-3">
          <h1 className="text-5xl relative text-center font-light my-4 yellowtext">
            We Have a Deep Understanding of Art
          </h1>
          <p className={Pclass}>
            Tattoo artists must have a clear and deep understanding not to
            mention an appreciation of art. That is the reason they are called
            artists. Having an understanding of art goes hand in hand with
            passion and talent (skill). Having these traits will give you the
            ability to pull off incredible ink art. However, as much as you have
            the skill to be on the pedestal of success, learning about art takes
            time, patience and practice
          </p>
          <p className={Pclass}>
            You especially need to have a sound and creative mind and couple
            this with putting down your sketches on paper trying to make it as
            unique and appealing as possible. Some artists go to such extents of
            sculpting out their ideas into physical 3D models to portray a clear
            design. If you take up the challenge of learning about art, you can
            do frequent research from different books or take art classes to
            start you off. In good time, you just might be able to ink skin
            perfectly just as we do.
          </p>
        </div>
      </div>
      <div className="Black">
        <div className="container self-center flex w-full py-14 max-[1023px]:block  max-[767px]:block">
          <div className="w-[50%]  max-[1023px]:w-[85%] max-[1023px]:m-auto max-[767px]:w-[90%]  max-[767px]:m-auto">
            <h1 className="text-5xl font-light my-3 yellowtext  max-[767px]:text-3xl  max-[767px]:font-semibold">
              BODY GHRAPICS TATTOO CAFE
            </h1>
            <p className="py-5 font-semibold whitetext max-[1023px]:pb-1">
              We are are located on 3056 N. Clybourne Ave. We are open 7 days a
              week from 12PM 8PM. You can make an appointment through our form
              below or by calling (773) 857-0609.
            </p>
            <p className="py-5 font-semibold whitetext">
              The shop is owned by Rob Goodkind. Rob is a highly acclaimed
              tattoo artist, and he is one of Chicago’s very own. The entire
              team is dedicated to always growing with the tattoo industry,
              embracing new techniques, and offering both full color and grey
              colors tattoos.
            </p>
          </div>
          <div className=" w-[50%]  m-auto  max-[767px]:w-[90%]">
            <div className="p-2 flex justify-center items-center w-[100%]">
              <img
                className="rounded-sm w-[21rem] h-[21rem] object-cover "
                src={Tattoo}
                alt="Tattoo equipment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
