import React from "react";
import './modal.css';
import { useSelector } from "react-redux";

const Modal = ({ children }) => {
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);
  return (
    <div className={`custom-modal-overlay`}>
      <div style={{ backgroundColor: backgroundColor }} className="custom-modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;