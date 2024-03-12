import React from "react";
import classes from "./certifications.module.css";
import CreateCertificate from "./CreateCertificate";
import { useSelector } from "react-redux";
import { t } from "i18next";

const Certifications = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  return (
    <React.Fragment>
      <h1 style={{ color: nonThemeColor, marginTop: "65px" }}>
        {t("Certifications.Title")}
      </h1>
      <div className={classes.certificateCard}>
        {t("Certifications.certificationsList", { returnObjects: true }).map(
          (item, index) => {
            return <CreateCertificate key={index} item={item} />;
          }
        )}
      </div>
    </React.Fragment>
  );
};
export default Certifications;
