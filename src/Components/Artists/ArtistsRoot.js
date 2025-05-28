import { NavLink } from "react-router-dom";
import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import WatsLogo from "../Assets/Socials/Wats.png";

let instaSvg = (
  <svg
    className="h-6 w-6"
    fill="white"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    enableBackground="new 0 0 512 512"
    xmlSpace="preserve"
  >
    <g id="5151e0c8492e5103c096af88a50059a5">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.084,0.5h379.819c36.079,0,65.597,29.505,65.597,65.584
        v379.819c0,36.079-29.518,65.597-65.597,65.597H66.084C30.005,511.5,0.5,481.982,0.5,445.903V66.084
        C0.5,30.005,30.005,0.5,66.084,0.5L66.084,0.5z M372.734,57.264c-12.65,0-23.005,10.355-23.005,23.005v55.067
        c0,12.65,10.354,23.005,23.005,23.005h57.762c12.65,0,23.005-10.354,23.005-23.005V80.269c0-12.65-10.354-23.005-23.005-23.005
        H372.734L372.734,57.264z M453.738,216.59h-44.975c4.254,13.897,6.55,28.606,6.55,43.852c0,84.996-71.111,153.898-158.839,153.898
        c-87.716,0-158.827-68.902-158.827-153.898c0-15.245,2.295-29.954,6.55-43.852H57.276v215.853c0,11.178,9.132,20.322,20.311,20.322
        h355.841c11.166,0,20.311-9.145,20.311-20.322V216.59L453.738,216.59z M256.475,155.447c-56.677,0-102.625,44.525-102.625,99.443
        s45.948,99.443,102.625,99.443c56.688,0,102.636-44.525,102.636-99.443S313.163,155.447,256.475,155.447z"
      ></path>
    </g>
  </svg>
);

const ArtistsRoot = () => {
  return (
    <div className="">
      <div className="w-full  overflow-hidden">
        <img
          className="w-screen h-[85vh]"
          src={studioPhoto}
          alt="Tattoo studio interior"
        />
      </div>

      <div className="Black">
        <div className="container py-10 w-full justify-center flex">
          <div className="w-[40%] text-center  ">
            <div>
              <img
                className="w-[80%] mx-auto"
                src={studioPhoto}
                alt="Tattoo studio interior"
              />
            </div>
            <div>
              <h1 className="text-2xl font-light my-2 whitetext">Chinmay</h1>
              <p className="py-1 font-semibold whitetext">
                Tattoo design/Artist
              </p>
              <p className="py-2  whitetext">
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
                        {instaSvg}
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
