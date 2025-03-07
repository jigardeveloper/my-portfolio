import React from "react";
import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";
import { useSelector } from "react-redux";
import Modal from "./ProjectDetails";
import { t } from "i18next";
import RemoveRedEye from "@mui/icons-material/RemoveRedEyeTwoTone";
import CancelIcon from '@mui/icons-material/Cancel';

const ProjectItem = (props) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const [modal, setModal] = React.useState(false)
  const mode = useSelector((state) => state.mode);

  const Toggle = () => {
    setModal(!modal);
    if (modal) {
      document.body.classList.remove('modal-open');
    } else {
      document.body.classList.add('modal-open');
    }
  }

  let description = props.project.description;
  if (description === "") {
    description = " project description";
  }
  if (description.length > 120) {
    description = description.substr(0, 110);
    description = description + " ... ";
  }

  const renderListItems = (items) => {
    return items.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <Card mode={mode} className={classes.projectItem} >
      <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
        <h2 style={{ color: uiColor, width: '95%' }}>{props.project.projectTitle}</h2>
        <RemoveRedEye className={classes.projectView} onClick={() => Toggle()} />
      </div>
      <p className={classes.description}>{description}</p>
      {
        modal &&
        <Modal>
          <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
            <h1 style={{ color: nonThemeColor, width: '95%' }}> {props.project.projectTitle}</h1>
            <CancelIcon style={{fontSize:'30px'}} className={classes.projectView} onClick={() => Toggle()} />
          </div>
          <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <img style={{ borderRadius: '9px' }} width={'800px'} height={'400px'} src={props.project?.image ? require(`../${props.project?.image}`) : ''} alt="" />
          </section>

          <div style={{ margin: "20px 0px 20px 40px", justifyContent: 'center', alignItems: 'center' }}>
            <section>
              <h2 style={{ margin: "20px 0px 10px 0px", color: uiColor }}> {t("Project.projectDescription")}</h2>
              <p style={{ margin: "20px 0px 10px 0px" }} className={classes.description}>
                &nbsp;&nbsp;{props.project.description}
              </p>
            </section>
            <section>
              <h2 style={{ color: uiColor, margin: "20px 0px 10px 0px" }}>
                {t("Project.key_fetures_title")}
              </h2>
              <ul className={classes.description}>
                {renderListItems(props?.project?.key_features)}
              </ul>
            </section>
            <section>
              <h2 style={{ color: uiColor, margin: "20px 0px 10px 0px" }}>
                {t("Project.technology_stack_title")}
              </h2>
              <ul className={classes.description}>
                {renderListItems(props?.project?.technology_stack)}
              </ul>
            </section>
            <section>
              <h2 style={{ color: uiColor, margin: "20px 0px 10px 0px" }}>
                {t("Project.design_considerations_title")}
              </h2>
              <ul className={classes.description}>
                {renderListItems(props?.project?.design_considerations)}
              </ul>
            </section>
            <section>
              <h2 style={{ color: uiColor, margin: "20px 0px 10px 0px" }}>
                {t("Project.future_enhancements_title")}
              </h2>
              <ul className={classes.description}>
                {renderListItems(props?.project?.future_enhancements)}
              </ul>
            </section>
          </div>
        </Modal>
      }
    </Card>
  );
};
export default ProjectItem;
