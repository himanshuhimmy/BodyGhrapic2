import React, { forwardRef, useImperativeHandle, useRef } from "react";

import { createPortal } from "react-dom";

import Bg from "../Assets/Bg/BgBlack.jpg";

const ModalRoot = forwardRef(function Modal({ children, Button, valid }, ref) {
  let dialog = useRef();
  console.log(`Button ${Button}`);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      style={{ backgroundImage: `url(${Bg})` }}
      ref={dialog}
      className={` bg-cover fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 Black2 rounded-2xl  text-center  shadow-slate-900 z-50`}
    >
      {children}
      <form method="dialog">
        <button
          valid={valid}
          className="p-3 mb-5 m-auto rounded-lg Yellow  hover:brightness-125 hover:saturate-150  transition duration-300 "
        >
          {Button}
        </button>
      </form>
    </dialog>,
    document.getElementById(`modal-root`)
  );
});

export default ModalRoot;
