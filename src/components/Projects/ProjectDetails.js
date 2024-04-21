import React from "react";
import './modal.css';
import classes from "./ProjectItem.module.css";
import { useSelector } from "react-redux";
import Close from "@mui/icons-material/Close";

const Modal = ({ handleClose, children }) => {
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);

  return (
    <div className={`custom-modal-overlay`}>
      <div style={{ backgroundColor: backgroundColor }} className="custom-modal-content">
        <Close fontSize="large" onClick={()=>handleClose()} />
        {children}
      </div>
    </div>
  );
};

export default Modal;