import React from "react";
import './modal.css';
import classes from "../Projects/ProjectItem.module.css";
import { useSelector } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import { createPortal } from "react-dom";

const Modal = ({ id, children, title, close }) => {
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);

  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm}></div>;
  };

  return (
    <div className={`custom-modal-overlay`}>
      {createPortal(
        <Backdrop />,
        document.getElementById("backdrop")
      )}
      <div id={id} style={{ backgroundColor, borderColor: uiColor }}
        className="custom-modal-content scrollable-container">
        <div className="header" style={{ borderBottomColor: uiColor }}>
          <h1 style={{ color: nonThemeColor, width: '95%' }}> {title}</h1>
          <CancelIcon style={{ fontSize: '30px' }} className={classes.projectView} onClick={() => close()} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;