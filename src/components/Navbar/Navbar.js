import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./navbar.css";
import { themeActions } from "../../store/theme";
import ColorModal from "./ColorModal";
import { t } from "i18next";
import { languageMap } from "../../hooks/i18nextInit";
import Select from "react-select";

const Navbar = ({ setSelectedLang, selectedLang }) => {
  const dispatch = useDispatch();
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const mode = useSelector((state) => state.mode);  
  const activeColor = useSelector((state) => state.theme.color);
  const [isColorModalShown, setColorModalShown] = useState(false);

  const changeColor = (newColor) => {
    dispatch(themeActions.changeThemeColor(newColor));
  };

  function handleLanguageChange(e) {
    setSelectedLang(e.value);
    localStorage.setItem("i18nextLng", e.value);
  }

  function handleModeChange() {
    const lightModeBtn = document.getElementById("lightModeBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");
    if (mode === "light") {
      lightModeBtn.style.display = "none";
      darkModeBtn.style.display = "block";
      darkModeBtn.style.color = "black";
    } else {
      lightModeBtn.style.display = "block";
      darkModeBtn.style.display = "none";
      lightModeBtn.style.color = "white";
    }
    dispatch(themeActions.toggleMode());
  }

  function handleColorSelector() {
    setColorModalShown((prev) => !prev);
  }

  useEffect(() => {
    const lightModeBtn = document.getElementById("lightModeBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");
    if (mode === "dark") {
      lightModeBtn.style.display = "none";
      darkModeBtn.style.display = "block";
      darkModeBtn.style.color = "black";
    }
  }, [mode === "dark"]);

  let defaultLan;
  switch (selectedLang) {
    case "en":
      defaultLan = { value: "en", label: "English" };
      break;
    case "gj":
      defaultLan = { value: "gj", label: "Gujarati" };
      break;
    case "hi":
      defaultLan = { value: "hi", label: "Hindi" };
      break;
    default:
      defaultLan = { value: "en", label: "English" };
      break;
  }
  return (
    <div className="main">
      <div
        className="navbar"
        style={{
          backgroundColor: mode === "light"? "rgba(204, 245, 255, 0.6)" : "rgba(0, 0, 0, 0.7)",
          borderBottom: "3px solid purple" 
        }}
      >
        <div className="logoContainer">
          <div id="logo">
          {t("Home.FName")}&nbsp;&nbsp;{t("Home.LName")}
          </div>
        </div>
        <div className="navsContainer" style={{ color: nonThemeColor }}></div>
        <Select
          name="language"
          options={languageMap}
          defaultValue={defaultLan}
          onChange={handleLanguageChange}
          placeholder={"Placeholder"}
          // className="selectTheme"
          styles={{
            option: (base) => ({
              ...base,
              border: `1px dotted transparent`,
              borderRadius: "6px",
              height: "38px",
              width: "calc(100% - 24px)",
              margin: "6px 12px ",
              fontSize: "16px",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary: "#4C6FFF",
            },
          })}
        />
        <div className="selectTheme">
          <div className="selectMode" onClick={handleModeChange}>
            <div id="lightModeBtn" style={{ color: "white" }}>
              <LightModeIcon />
            </div>
            <div id="darkModeBtn" style={{ display: "none" }}>
              <DarkModeIcon />
            </div>
          </div>

          <div
            className="colorSelector"
            onClick={handleColorSelector}
            style={{ backgroundColor: activeColor }}
          >
            {isColorModalShown && (
              <ColorModal
                selectColor={changeColor}
                onConfirm={handleColorSelector}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
