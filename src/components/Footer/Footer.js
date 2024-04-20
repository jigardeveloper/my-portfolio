import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./footer.css";
import { useSelector } from "react-redux";
import { t } from "i18next";

function Footer() {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  // let currentYear = new Date().getFullYear();
  return (
    <footer className="centered" style={{ color: nonThemeColor }}>
      <CopyrightIcon />
      &nbsp;2022 &nbsp;Coded By&nbsp; {t("Home.FName")} &nbsp;
      {t("Home.LName")} 
    </footer>
  );
}
export default Footer;
