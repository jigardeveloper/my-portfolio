import classes from "./programmingSkills.module.css";
import {
  python,
  mongoDB,
  fireBase,
  react,
  nodeJs,
  js,
  redux,
} from "../asset/svg/svg";
import { useSelector } from "react-redux";
import { t } from "i18next";

const skills = [js, fireBase, react, nodeJs, mongoDB, redux, python];
const ProgrammingSkills = (props) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  return (
    <div className={classes.mainCard}>
      <h1 style={{ color: nonThemeColor }}>
        {t("SkillSet.TitleF")}{" "}
        <span style={{ color: uiColor }}>{t("SkillSet.TitleL")}</span>
      </h1>
      <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
        {skills.map((Item, index) => (
          <div
            className={classes.skillItem}
            style={{ borderColor: uiColor }}
            key={index}
          >
            <div className={classes.name}>React</div>
            <Item />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingSkills;
