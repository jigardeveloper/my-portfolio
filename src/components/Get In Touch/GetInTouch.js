import React from "react";
import classes from "./GetInTouch.module.css";
import ContactForm from "./ContactForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import { useSelector } from "react-redux";
import { t } from "i18next";

const data = ["+91 9664627247", "jigarahir0147@gmail.com", "devbhumi dwarka, gujarat"];

const GetInTouch = ({ btnText, setBtnText }) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const Icons = [
    <CallIcon fontSize="large" />,
    <SendIcon fontSize="large" />,
    <LocationOnIcon fontSize="large" />,
  ];

  const contactDetails = data.map((item, index) => (
    <div className={classes.contactCard} style={{ color: uiColor }} key={index}>
      <div className={classes.contactIcon} style={{ backgroundColor: uiColor }}>
        {Icons[index]}
      </div>
      <div className={classes.contactValue}>{item}</div>
    </div>
  ));

  return (
    <div id="get-in-touch" className={classes.getInTouch} style={{ borderColor: uiColor }}>
      <div className={classes.getInTouchCard}>
        <h1 style={{ color: nonThemeColor }}> {t("Touch.Title")}</h1>
        <p>{t("Touch.Desc")}</p>
        <div>{contactDetails}</div>
      </div>
      <ContactForm btnText={btnText} setBtnText={setBtnText} />
    </div>
  );
};
export default GetInTouch;
