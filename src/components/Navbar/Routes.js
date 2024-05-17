import React from "react";
import { t } from "i18next";

function Routes(props) {
    const toggleActive = (index) => {
        const navs = document.getElementsByClassName("navs");
        for (let i = 0; i < navs.length; i++) {
            navs[i].classList.remove("active");
        };
        navs[index].classList.add("active");
    }
    return (
        <>
            {/* For broswer router replace- 
            a -> Navlink
            href - to 
            # - / */}
            <a href="#home" onClick={props.onClick}>
                <div className="navs active" onClick={() => toggleActive(0)}>
                    {t("Home.Title")}</div>
            </a>
            <a href="#education" onClick={props.onClick}>
                <div className="navs" onClick={() => toggleActive(1)}>
                    {t("Education.Title")}</div>
            </a>
            <a href="#projects" onClick={props.onClick}>
                <div className="navs" onClick={() => toggleActive(2)}>
                    {t("Project.Title")}</div>
            </a>
            <a href="#get-in-touch" onClick={props.onClick}>
                <div className="navs" onClick={() => toggleActive(3)}>
                    {t("Message.Title")}</div>
            </a>
        </>
    )
}
export default Routes;