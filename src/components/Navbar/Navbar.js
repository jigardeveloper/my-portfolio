import React, { useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import { t } from "i18next";
import Setting from "../Setting/Setting";
import SettingsIcon from '@mui/icons-material/Settings';
import Routes from "./Routes";

const Navbar = ({ setSelectedLang, selectedLang }) => {
  const menuRef = useRef();
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const mode = useSelector((state) => state.mode);
  const [modal, setModal] = React.useState(false)
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleLanguageChange = useCallback(
    (e) => {
      setSelectedLang(e.value);
      localStorage.setItem("i18nextLng", e.value);
    },
    [setSelectedLang]
  );

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

  const toggleSettingModel = () => {
    setModal(!modal);
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }
  function handleDropDown() {
    setIsDropDownVisible((prevValue) => {
      return !prevValue;
    });
  }
  function handleNavigate() {
    handleDropDown();
    menuRef.current.checked = false;
  }

  return (
    <div className="main">
      <div
        className="navbar"
        style={{
          backgroundColor: mode === "light" ? "rgba(204, 245, 255, 0.6)" : mode === "dark" ? "rgba(0, 0, 0, 0.7)" : 'rgb(0, 31, 63, 0.6)',
          borderBottom: "3px solid purple"
        }}
      >
        <div className="logoContainer">
          <div id="logo">
            {t("Home.FName")}&nbsp;{t("Home.LName")}
          </div>
        </div>

        <div className="navsContainer" style={{ color: nonThemeColor }}>
          <Routes />
        </div>
        <div className="selectTheme">
          <SettingsIcon
            className='settingicon'
            style={{ color: 'purple', height: '34px', width: '34px' }}
            onClick={() => toggleSettingModel()}
          />
          <input type="checkbox" onClick={() => handleDropDown()} ref={menuRef} id="burger-toggle" />
          <label htmlFor="burger-toggle" className="burger-menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </div>
        {modal &&
          <Setting
            defaultLan={defaultLan}
            handleLanguageChange={handleLanguageChange}
            close={() => toggleSettingModel()} />
        }
      </div>
      {isDropDownVisible && <div className="mob-nav" style={{ color: 'white' }}>
        <Routes onClick={handleNavigate} />
      </div>}
    </div>
  );
};

export default Navbar;
