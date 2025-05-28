import studioPhoto from "../Assets/Studio/IMG_5917.JPG";
import Faqs from "./FaqData";

const Faq = () => {
  console.log("Faq");
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
        <div className="container py-8">
          {Faqs.map((el) => {
            return (
              <div key={el.id} className="whitetext my-6 px-4">
                <h1 className="font-bold text-xl mb-2">{el.question}</h1>
                <p className="font-semibold">{el.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
