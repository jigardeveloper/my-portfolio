import React from "react";
import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";
import { useSelector } from "react-redux";
import Modal from "./ProjectDetails";
import { t } from "i18next";

const ProjectItem = (props) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const [modal, setModal] = React.useState(false)

  const Toggle = () => {
    setModal(!modal);
  }

  let description = props.project.description;
  if (description === "") {
    description = " project description";
  }
  if (description.length > 120) {
    description = description.substr(0, 120);
    description = description + " ... ";
  }

  return (
    <Card className={classes.projectItem} onClick={() => Toggle()}>
      <h2 style={{ color: uiColor }}>{props.project.projectTitle}</h2>
      <p className={classes.description}>{description}</p>
      <div className={classes.controls}>
        <div className={classes.projectLink}>
          {/* <a target="_blank" rel="noreferrer" href={props.project.sourceLink} style={{color:'orange'}}><StarIcon fontSize="large" /></a> */}
          {/* <a
            target="_blank"
            rel="noreferrer"
            href={props.project.sourceLink}
            style={{ color: nonThemeColor }}
          >
          <GitHubIcon fontSize="large" />
          </a> */}
        </div>
        <p className={classes.dateUpdated} style={{ color: nonThemeColor }}>
          Last Updated On : {props.project.lastUpdated}
        </p>
      </div>
      {
        modal &&
        <Modal
          show={modal}
          handleClose={() => Toggle()}
        >
          <h1 style={{ color: nonThemeColor }}> {props.project.projectTitle}</h1>
          {props.project?.image && <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img width={'800px'} height={'200px'} src={require(`../${props.project?.image}`)} alt="Project Cover" />
          </section>}

          <div style={{ margin: "20px 0px 20px 40px", justifyContent: 'center', alignItems: 'center' }}>
            <section>
              <h2 style={{ margin: "20px 0px 10px 0px", color: uiColor }}>Description</h2>
              <p style={{ margin: "20px 0px 10px 0px" }} className={classes.description}>
                &nbsp;&nbsp;{props.project.description}
              </p>
            </section>
            <section>
              <h2 style={{ color: uiColor, margin: "20px 0px 10px 0px" }}>
                {t("Project.key_fetures_title")}
              </h2>
              <ul className={classes.description}>
                {props?.project?.key_features?.map(
                  (item, index) => {
                    return <li key={index}>{item}</li>
                  }
                )}
              </ul>
            </section>
            <section>
              <h2 style={{ color: uiColor, margin: "20px 0px 10px 0px" }}>
                {t("Project.technology_stack_title")}
              </h2>
              <ul className={classes.description}>
                {props?.project?.technology_stack?.map(
                  (item, index) => {
                    return <li key={index}>{item}</li>
                  }
                )}
              </ul>
            </section>
            <section>
              <h2 style={{ color: uiColor, margin: "20px 0px 10px 0px" }}>
                {t("Project.design_considerations_title")}
              </h2>
              <ul className={classes.description}>
                {props?.project?.design_considerations?.map(
                  (item, index) => {
                    return <li key={index}>{item}</li>
                  }
                )}
              </ul>
            </section>
            <section>
              <h2 style={{ color: uiColor, margin: "20px 0px 10px 0px" }}>
                {t("Project.future_enhancements_title")}
              </h2>
              <ul className={classes.description}>
                {props?.project?.future_enhancements?.map(
                  (item, index) => {
                    return <li key={index}>{item}</li>
                  }
                )}
              </ul>
            </section>
          </div>
        </Modal>
      }
    </Card>
  );
};
export default ProjectItem;
