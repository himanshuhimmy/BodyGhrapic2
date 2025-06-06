import { NavLink } from "react-router-dom";
import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import WatsLogo from "../Assets/Socials/Wats.png";
import { icons } from "../svg";

const ArtistsRoot = () => {
  return (
    <div className="">
      <div className="w-full  overflow-hidden">
        <img
          className="w-screen h-[85vh] max-[1023px]:h-auto max-[767px]:h-auto"
          src={studioPhoto}
          alt="Tattoo studio interior"
        />
      </div>

      <div className="Black">
        <div className="container py-10 w-full justify-center flex">
          <div className="w-[40%] text-center max-[1023px]:w-[70%] max-[767px]:w-[80%] ">
            <div>
              <img
                className="w-[80%] mx-auto  max-[767px]:w-[90%]"
                src={studioPhoto}
                alt="Tattoo studio interior"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold my-2 whitetext max-[1023px]:text-3xl max-[767px]:font-semibold  max-[767px]:pb-1">
                Chinmay
              </h1>
              <p className="py-1 font-semibold yellowtext max-[1023px]:py-0 max-[767px]:p-0">
                Tattoo design/Artist
              </p>
              <p className="py-2  whitetext max-[1023px]:font-semibold">
                Chinmay started tattooing in 2008 and enjoys working in many
                styles
              </p>
            </div>
            <div className="py-2">
              <div className="w-full py-2">
                <div className="justify-center">
                  <ul className="flex justify-center">
                    <li className="pt-3.5 px-2">
                      <a href="https://www.instagram.com/toxinhelmet/">
                        {icons.insta}
                      </a>
                    </li>
                    <li className="px-2 py-2">
                      <a href="https:/wa.me/918805300532?text=Hello, I’d like to schedule a professional inquiry call.">
                        <img src={WatsLogo} className="h-9 w-9" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full py-2">
                <NavLink to={"/ArtistProfiles"}>
                  <button className="py-3 px-2 m-auto rounded-lg Yellow w-[30%]   hover:brightness-125 hover:saturate-150  transition duration-300 ">
                    View Potfolio
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsRoot;
