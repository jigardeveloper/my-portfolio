import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./setting.css";
import ColorModal from "../Navbar/ColorModal";
import { t } from "i18next";
import { languageMap } from "../../hooks/i18nextInit";
import Select from "react-select";
import Mode from "../../theme/mode";
import Modal from "../UI/Model";

function Setting({
    close,
    defaultLan,
    handleLanguageChange,
}) {
    const activeColor = useSelector((state) => state.theme.color);    
    const [isColorModalShown, setColorModalShown] = useState(false);
    const [activeSection, setActiveSection] = useState('general');
    
    const togglePopup = () => {
        close();
    };
    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
        setColorModalShown(false);
    };
    
    return (
        <React.Fragment>
            <Modal
                id="popup"
                close={() => togglePopup()}
                title= {t("Setting.title")}
            >
                <div className="settings-body">
                    <nav className="sidebar">
                        <ul>
                            <a
                                href="#general"
                                className={activeSection === 'general' ? 'active' : ''}
                                onClick={() => handleSectionChange('general')}
                            >
                                 {t("Setting.language")}
                            </a>
                            <a
                                href="#theme"
                                className={activeSection === 'theme' ? 'active' : ''}
                                onClick={() => handleSectionChange('theme')}
                            >
                                {t("Setting.theme")}
                            </a>
                        </ul>
                    </nav>

                    <div className="content">
                        <div
                            id="general"
                            className={`content-section ${activeSection === 'general' ? '' : 'hidden'}`}
                        >
                            <div className="flex-container">
                                <h3>{t("Setting.select_language")}</h3>
                                <Select
                                    name="language"
                                    options={languageMap}
                                    defaultValue={defaultLan}
                                    onChange={handleLanguageChange}
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
                                            primary: "purple",
                                        },
                                    })}
                                />
                            </div>
                        </div>
                        <div
                            id="theme"
                            className={`content-section ${activeSection === 'theme' ? '' : 'hidden'}`}
                        >
                            <h3 style={{ margin: '23px 0px 10px 23px' }}>{t("Setting.select_theme")}</h3>
                            <Mode />
                            <div style={{ margin: '23px 0px 0px 23px', display: 'flex', gap: '20px' }}>
                                <h3>{t("Setting.select_color")}</h3>
                                <div className="selectTheme">
                                    <div
                                        className="colorSelector"
                                        onClick={() => {
                                            setColorModalShown((prev) => !prev)
                                        }}
                                        style={{ backgroundColor: activeColor }}
                                    >
                                        {isColorModalShown && (
                                            <ColorModal
                                                onConfirm={() => setColorModalShown(false)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );}
export default Setting;