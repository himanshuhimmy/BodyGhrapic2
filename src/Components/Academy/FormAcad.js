import React from "react";
import WatsLogo from "../Assets/Socials/Wats.png";

const FormAcad = () => {
  let inputClass = "p-2 rounded-lg mb-4 mx-7";

  let SubmitHandle = ({ event }) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    let Dataf = Object.fromEntries(formData.entries());
    console.log(Dataf);
  };

  return (
    <div className="p-4 h-[60vh] w-[60vh]">
      <form onSubmit={SubmitHandle} className="py-6 flex flex-col">
        <input
          required
          type="text"
          className={inputClass}
          placeholder="Full Name"
        />
        <input
          required
          type="email"
          className={inputClass}
          placeholder="E-mail"
        />
        <input
          required
          type="number"
          className={inputClass}
          placeholder="Number"
        />
        <p className="text-sm pb-2 font-medium whitetext">Date of Birth</p>
        <input required type="date" className={inputClass} placeholder="DOB" />
        <div>
          <div>
            <p className="text-sm pb-2 font-medium whitetext">
              <label className="whitetext">
                Are you working as a tattoo artist?
              </label>
            </p>
            <select className={inputClass}>
              <option value="" disabled hidden>
                Select
              </option>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <p className=" mx-auto whitetext flex justify-center items-center">
            <p className="p-1">Connect on</p>

            <p>
              <a href="https:/wa.me/918805300532?text=Hello, I’d like a free orientation.">
                <img src={WatsLogo} className="h-9 w-9" />
              </a>
            </p>
          </p>
          <button className="p-3 bg-lime-900 my-3 whitetext rounded-xl">
            Submit
          </button>
          <p className="whitetext">Your data is safe with us</p>
        </div>
      </form>
    </div>
  );
};

export default FormAcad;
