import React, { useMemo } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import ThemeData from "../../Data/ThemeData";
import "./colorModal.css";
import { themeActions } from "../../store/theme";

const Backdrop = ({ onConfirm }) => {
  return <div className="backdrop" onClick={onConfirm}></div>;
};

function ColorModal(props) {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const { defaultColors, colorCardBgColor } = useMemo(() => {
    let defaultColors, colorCardBgColor;
    if (mode === "light") {
      defaultColors = ThemeData.lightBgThemeColors;
      colorCardBgColor = "white";
    } else {
      defaultColors = ThemeData.darkBgThemeColors;
      colorCardBgColor = "black";
    }
    return { defaultColors, colorCardBgColor };
  }, [mode]);

  const changeColor = (index) => {
    dispatch(themeActions.changeThemeColor(defaultColors[index]));
  };

  return (
    <>
      {createPortal(
        <Backdrop onConfirm={() => props.onConfirm()} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <div className="colorCard" style={{ backgroundColor: colorCardBgColor }}>
          {defaultColors.map((color, index) => (
            <div
              key={index}
              onClick={() => changeColor(index)}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>,
        document.getElementById("overlay")
      )}
    </>
  );
}

export default React.memo(ColorModal);
