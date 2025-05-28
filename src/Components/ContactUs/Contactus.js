import { useRef } from "react";
import ModalRoot from "../ReusableComponents/ModalRoot";
import WatsLogo from "../Assets/Socials/Wats.png";
const Contactus = () => {
  let modalRef = useRef();

  let PhoneSvg = (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  let onSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);

    let DataF = Object.fromEntries(formData.entries());
    console.log(DataF);

    if (DataF.phone.length !== 10) {
      alert("Phone number must be exactly of 10 digits.");
      return;
    }

    event.target.reset();
    modalRef.current.open();
  };

  return (
    <div className="Black py-8 ">
      <ModalRoot ref={modalRef} Button="okay">
        <div className="p-11 ">
          <h1 className="text-3xl font-light my-3 yellowtext">THANK YOU</h1>
          <p className="py-5 font-semibold whitetext">
            We will Connect With You ASAP
          </p>
        </div>
      </ModalRoot>
      <div className="flex container w-full">
        <div className="w-[50%] py-7">
          <iframe
            className="w-[100%] px-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0571813518927!2d72.7953150967896!3d19.4531013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abdf0d7bbfc3%3A0x4feb4e410948f529!2sBodygraphics%20tattoo%20cafe!5e0!3m2!1sen!2sin!4v1748088046859!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="">
            <div className="flex py-7 ">
              <p>
                <a href="https:/wa.me/918805300532?text=Hello, I’d like to schedule a professional inquiry call.">
                  <img src={WatsLogo} className="h-9 w-9" />
                </a>
              </p>
              <p className="whitetext px-2 py-1 ">
                +91 87799 01212 / +91 88053 00532
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] px-4 ">
          <div className="">
            <h1 className="text-2xl text-center font-bold my-3 yellowtext">
              GET IN TOUCH
            </h1>
            <p className="py-2 font-semibold whitetext">
              We can be contacted by telephone, email or in writing, please find
              the relevant information below. Alternatively you can send us an
              enquiry via the online enquiry form.
            </p>
          </div>
          <div className="">
            <form onSubmit={onSubmit}>
              <div className="grid gap-5">
                <input
                  required
                  name="name"
                  className="h-10 px-2"
                  placeholder="Your Name"
                />
                <input
                  required
                  type="email"
                  name="email"
                  className="h-10 px-2"
                  placeholder="Your Email"
                />
                <input
                  required
                  type="number"
                  minLength={10}
                  name="phone"
                  className="h-10 px-2"
                  placeholder="Phone"
                />

                <input
                  required
                  name="subject"
                  className="h-10 px-2"
                  placeholder="Subject"
                />
                <textarea
                  required
                  name="message"
                  className="h-28 px-2"
                  placeholder="Your Message / Doubt"
                />

                <button className="py-3 px-2 m-auto rounded-lg hover:brightness-125 hover:saturate-150 transition duration-300 Yellow w-[25%]">
                  Submit
                </button>
                <p className="text-2xl font-light my-3 yellowtext"></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
