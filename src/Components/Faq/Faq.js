import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import Faqs from "./FaqData";
import MinusIcon from "../Assets/icons/minus.png";
import PlusIcon from "../Assets/icons/plus.png";
import { useRef, useState } from "react";

const Faq = () => {
  let [activeQustion, setActiveQustion] = useState(null);

  const answerRef = useRef({});

  const getHeight = (id) => {
    const el = answerRef.current[id];
    return el?.scrollHeight || 0;
  };

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
        <div className="container w-full py-8">
          <h1 className="text-center yellowtext text-3xl font-bold">
            Frequently asked qustions
          </h1>
          {Faqs.map((el) => {
            const isActive = activeQustion === el.id;
            const maxHeight = isActive ? `${getHeight(el.id)}px` : "0px";
            return (
              <div key={el.id} className="whitetext my-6 px-4  w-[90%]">
                <div className="bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() =>
                      setActiveQustion(activeQustion === el.id ? null : el.id)
                    }
                    className="font-bold w-full flex p-2 text-xl  justify-between"
                  >
                    <p className="text-left">{el.question}</p>

                    <img
                      className="h-6 w-6 items-center"
                      src={activeQustion === el.id ? MinusIcon : PlusIcon}
                      alt="Toggle Icon"
                    />
                  </button>
                </div>
                <div
                  ref={(elRef) => (answerRef.current[el.id] = elRef)}
                  style={{
                    overflow: "hidden",
                    maxHeight,
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p className="font-semibold mt-2 bg-gray-700 p-3 rounded-lg">
                    {el.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
