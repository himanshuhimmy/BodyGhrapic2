import React, { useEffect, useState } from "react";
import Left from "../Assets/icons/left.png";
import Right from "../Assets/icons/right.png";
import { icons } from "../svg";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    text: "Amazing experience! The artist was professional and the studio was very clean. Highly recommended.",
    location: "Mumbai",
    date: "2024-12-10",
    star: "5",
  },
  {
    id: 2,
    name: "Priya Singh",
    text: "Loved my new tattoo! The design was exactly what I wanted. Will come back for more.",
    location: "Delhi",
    date: "2025-01-22",
    star: "5",
  },
  {
    id: 3,
    name: "Rahul Verma",
    text: "Very friendly staff and great attention to detail. The aftercare tips were super helpful.",
    location: "Pune",
    date: "2025-02-15",
    star: "5",
  },
  {
    id: 4,
    name: "Sneha Patel",
    text: "The piercing process was smooth and painless. Thank you for making me feel comfortable!",
    location: "Ahmedabad",
    date: "2025-03-05",
    star: "4",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    text: "Best tattoo studio in town! The artists are creative and really listen to your ideas.",
    location: "Bangalore",
    date: "2025-04-12",
    star: "5",
  },
  {
    id: 6,
    name: "Meera Nair",
    text: "Clean, hygienic, and talented artists. My tattoo healed perfectly. Highly recommend!",
    location: "Chennai",
    date: "2025-05-01",
    star: "4",
  },
];

let starCount = [1, 2, 3, 4, 5];

const Testimonal = () => {
  function NoOfStars(el) {
    const stars = [];
    for (let i = 0; i < el; i++) {
      stars.push(
        <span className="px-[2px]" key={i}>
          {icons.star}
        </span>
      );
    }
    return stars;
  }

  let [reviewState, setReviewState] = useState(0);
  let ReviewNow = reviewState;

  function PrevB() {
    setReviewState((prevState) =>
      prevState === 0 ? testimonials.length - 1 : prevState - 1
    );
  }

  function NextB() {
    setReviewState((prevState) =>
      prevState === testimonials.length - 1 ? 0 : prevState + 1
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewState((prevState) =>
        prevState === 0
          ? testimonials.length - 1
          : prevState === testimonials.length - 1
          ? 0
          : prevState + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 Black2 whitetext">
      <h2 className="text-3xl yellowtext  font-bold text-center mb-6  max-[767px]:font-semibold  max-[767px]:mb-2 ">
        Testimonials
      </h2>
      <div className="container flex w-full max-[1023px]:block max-[767px]:block">
        <div className="w-[30%] max-[1023px]:w-[90%] max-[1023px]:text-center max-[1023px]:m-auto  max-[767px]:w-[90%] max-[767px]:m-auto max-[767px]:text-center">
          <h1 className="text-2xl font-semibold my-3 yellowtext">EXCILLENT</h1>
          <div className="w-full flex max-[1023px]:justify-center max-[767px]:justify-center max-[767px]:flex-row ">
            {starCount.map((el, id) => (
              <span className="px-1 " key={id}>
                {icons.star}
              </span>
            ))}
          </div>
          <p>Based on 80 GOOGLE reviews</p>
          <div className="w-full max-[1023px]:flex max-[1023px]:justify-center max-[767px]:justify-center max-[767px]:flex">
            {icons.Google}
          </div>
        </div>
        <div className="flex justify-center relative shadow-slate-400 mx-auto  pb-3 whitetext  w-[70%]">
          <div className="p-3 rounded-xl w-[50%]  py-3 ">
            <div className="absolute self-center flex justify-between items-center gap-28 ">
              <button>
                <img
                  onClick={PrevB}
                  alt="Left"
                  className="w-10 h-10 rounded-full hover:scale-125 transition duration-300 ease-in-out bg-slate-800 "
                  src={Left}
                />
              </button>
              <button>
                <img
                  onClick={NextB}
                  alt="Right"
                  className="w-10 h-10 rounded-full hover:scale-125 transition duration-300 ease-in-out bg-slate-800"
                  src={Right}
                />
              </button>
            </div>
          </div>
          <div className="h-57">
            <div>
              <h1 className="font-bold mb-1 flex items-center">
                <p className="mr-2">{testimonials[ReviewNow].name}</p>
                <>{icons.G}</>
              </h1>
            </div>
            <div>
              <p className="mb-2 font-semibold">
                {testimonials[ReviewNow].text}
              </p>
            </div>
            <div>
              <h1 className="font-bold mb-2">
                {new Date(testimonials[ReviewNow].date).toLocaleDateString()}
              </h1>
            </div>
            <div className="mb-2 underline">
              {testimonials[ReviewNow].location}
            </div>
            <div>
              <p className="flex">{NoOfStars(testimonials[ReviewNow].star)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
