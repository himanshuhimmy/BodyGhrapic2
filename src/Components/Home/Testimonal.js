import React from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    text: "Amazing experience! The artist was professional and the studio was very clean. Highly recommended.",
    location: "Mumbai",
    date: "2024-12-10",
    star: "5",
  },
  {
    name: "Priya Singh",
    text: "Loved my new tattoo! The design was exactly what I wanted. Will come back for more.",
    location: "Delhi",
    date: "2025-01-22",
    star: "5",
  },
  {
    name: "Rahul Verma",
    text: "Very friendly staff and great attention to detail. The aftercare tips were super helpful.",
    location: "Pune",
    date: "2025-02-15",
    star: "5",
  },
  {
    name: "Sneha Patel",
    text: "The piercing process was smooth and painless. Thank you for making me feel comfortable!",
    location: "Ahmedabad",
    date: "2025-03-05",
    star: "4",
  },
  //   {
  //     name: "Vikram Joshi",
  //     text: "Best tattoo studio in town! The artists are creative and really listen to your ideas.",
  //     location: "Bangalore",
  //     date: "2025-04-12",
  //     star: "5",
  //   },
  //   {
  //     name: "Meera Nair",
  //     text: "Clean, hygienic, and talented artists. My tattoo healed perfectly. Highly recommend!",
  //     location: "Chennai",
  //     date: "2025-05-01",
  //     star: "4",
  //   },
];

let starCount = [1, 2, 3, 4, 5];

const Testimonal = () => {
  let star = (
    <svg
      className="w-5 h-5 mb-3"
      viewBox="0 0 16 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <g transform="matrix(1,0,0,1,-427.432,-259.996)">
        <g transform="matrix(1.01647,0,0,1.01647,-14.9846,-123.719)">
          <path
            d="M442.181,378.04C442.286,377.716 442.588,377.497 442.928,377.497C443.268,377.497 443.569,377.716 443.674,378.04L444.991,382.098C445.03,382.217 445.106,382.321 445.207,382.395C445.309,382.469 445.432,382.509 445.557,382.509L449.824,382.507C450.164,382.507 450.465,382.726 450.57,383.05C450.675,383.373 450.56,383.727 450.285,383.927L446.833,386.434C446.731,386.508 446.655,386.612 446.616,386.731C446.577,386.851 446.578,386.98 446.616,387.099L447.936,391.156C448.041,391.48 447.926,391.834 447.651,392.034C447.376,392.234 447.003,392.234 446.728,392.034L443.278,389.525C443.176,389.451 443.054,389.411 442.928,389.411C442.802,389.411 442.68,389.451 442.578,389.525L439.127,392.034C438.852,392.234 438.48,392.234 438.205,392.034C437.929,391.834 437.814,391.48 437.92,391.156L439.239,387.099C439.278,386.98 439.278,386.851 439.239,386.731C439.201,386.612 439.125,386.508 439.023,386.434L435.571,383.927C435.296,383.727 435.18,383.373 435.285,383.05C435.391,382.726 435.692,382.507 436.032,382.507L440.298,382.509C440.424,382.509 440.547,382.469 440.648,382.395C440.75,382.321 440.826,382.217 440.864,382.098L442.181,378.04Z"
            style={{ fill: "rgb(246,187,6)" }}
          />
        </g>
      </g>
    </svg>
  );

  let G = (
    <svg
      className="w-6 h-6 my-3"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <defs>
        <path
          id="a"
          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="b">
        <use href="#a" overflow="visible" />
      </clipPath>
      <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
      <path
        clipPath="url(#b)"
        fill="#EA4335"
        d="M0 11l17 13 7-6.1L48 14V0H0z"
      />
      <path
        clipPath="url(#b)"
        fill="#34A853"
        d="M0 37l30-23 7.9 1L48 0v48H0z"
      />
      <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
    </svg>
  );

  let Google = (
    <svg
      className="w-40 m-3  "
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 255.2 80.3"
      style={{ enableBackground: "new 0 0 255.2 80.3" }}
      xmlSpace="preserve"
    >
      <g id="XMLID_11_">
        <path
          id="XMLID_10_"
          fill="#4285F4"
          d="M31.9,28.6v8.6h20.5c-0.6,4.8-2.2,8.3-4.7,10.8c-3,3-7.7,6.3-15.8,6.3
        c-12.6,0-22.5-10.2-22.5-22.8S19.2,8.6,31.9,8.6c6.8,0,11.8,2.7,15.5,6.1l6-6C48.3,3.8,41.4,0,31.9,0C14.6,0,0,14.1,0,31.4
        s14.6,31.4,31.9,31.4c9.4,0,16.4-3.1,21.9-8.8c5.7-5.7,7.4-13.6,7.4-20.1c0-2-0.1-3.8-0.5-5.4L31.9,28.6L31.9,28.6z"
        />
        <path
          id="XMLID_24_"
          fill="#EA4335"
          d="M86.9,21.6c-11.2,0-20.4,8.5-20.4,20.3c0,11.7,9.1,20.3,20.4,20.3s20.4-8.6,20.4-20.3
        C107.2,30.1,98.1,21.6,86.9,21.6z M86.9,54.2c-6.1,0-11.4-5.1-11.4-12.3c0-7.3,5.3-12.3,11.4-12.3s11.4,5,11.4,12.3
        C98.3,49.1,93,54.2,86.9,54.2z"
        />
        <path
          id="XMLID_21_"
          fill="#4285F4"
          d="M186.6,26.1h-0.3c-2-2.4-5.8-4.5-10.7-4.5c-10.1,0-19,8.8-19,20.3c0,11.4,8.8,20.3,19,20.3
        c4.9,0,8.7-2.2,10.7-4.6h0.3v2.8c0,7.7-4.2,11.9-10.8,11.9c-5.4,0-8.8-3.9-10.2-7.2l-7.7,3.2c2.2,5.4,8.1,12,18,12
        c10.4,0,19.3-6.1,19.3-21.1V22.7h-8.4v3.4H186.6z M176.4,54.2c-6.1,0-10.8-5.2-10.8-12.3c0-7.2,4.7-12.3,10.8-12.3
        s10.8,5.2,10.8,12.4C187.3,49,182.5,54.2,176.4,54.2z"
        />
        <path
          id="XMLID_18_"
          fill="#FBBC05"
          d="M132.3,21.6c-11.2,0-20.4,8.5-20.4,20.3c0,11.7,9.1,20.3,20.4,20.3s20.4-8.6,20.4-20.3
        C152.6,30.1,143.5,21.6,132.3,21.6z M132.3,54.2c-6.1,0-11.4-5.1-11.4-12.3c0-7.3,5.3-12.3,11.4-12.3c6.1,0,11.4,5,11.4,12.3
        C143.7,49.1,138.4,54.2,132.3,54.2z"
        />
        <path id="XMLID_3_" fill="#34A853" d="M202.1,0.8h8.8v61.3h-8.8V0.8z" />
        <path
          id="XMLID_14_"
          fill="#EA4335"
          d="M237.9,54.2c-4.5,0-7.7-2.1-9.8-6.1l27.1-11.2l-0.9-2.3c-1.7-4.5-6.8-12.9-17.3-12.9
        c-10.4,0-19.1,8.2-19.1,20.3c0,11.4,8.6,20.3,20.1,20.3c9.3,0,14.7-5.7,16.9-9l-6.9-4.6C245.6,51.9,242.4,54.2,237.9,54.2
        L237.9,54.2z M237.3,29.2c3.6,0,6.7,1.9,7.7,4.5l-18.3,7.6C226.6,32.7,232.7,29.2,237.3,29.2z"
        />
      </g>
    </svg>
  );

  let Card =
    " shadow-md transition duration-300 ease-in-out hover:shadow-[4px_4px_12px_rgba(255,255,255,0.4)] testblack rounded-lg shadow-xl p-6 max-w-xs w-full";

  return (
    <div className="py-8 Black2 whitetext">
      <h2 className="text-3xl yellowtext  font-bold text-center mb-6">
        Testimonials
      </h2>
      <div className="container flex w-full">
        <div className="w-[30%]">
          <h1 className="text-2xl font-light my-3 yellowtext">EXCILLENT</h1>
          <div className="w-full flex ">
            {starCount.map((el, id) => (
              <span key={id}>{star}</span>
            ))}
          </div>
          <p>Based on 80 GOOGLE reviews</p>
          <div className="w-full">{Google}</div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mx-auto  pb-3   w-[70%]">
          {testimonials.map((t, idx) => (
            <div key={idx} className={Card}>
              <p className="mb-4">"{t.text}"</p>
              <div className="font-semibold flex">
                <p> {G}</p> <p className="my-3 px-1"> {t.name}</p>
              </div>
              <div className="text-sm ">{t.location}</div>
              <div className="text-xs  mt-1">
                {new Date(t.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
