import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, title, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="bg-white p-10 rounded">{children}</div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
