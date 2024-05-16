import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./setting.css";
import ColorModal from "./ColorModal";
import { t } from "i18next";
import { languageMap } from "../../hooks/i18nextInit";
import Select from "react-select";
import Mode from "../../theme/mode";
import { createPortal } from "react-dom";
import CancelIcon from '@mui/icons-material/Cancel';

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm}></div>;
};

function Setting({
    close,
    defaultLan,
    handleLanguageChange,
}) {
    const activeColor = useSelector((state) => state.theme.color);
    const backgroundColor = useSelector((state) => state.theme.backgroundColor);
    const [isColorModalShown, setColorModalShown] = useState(false);
    const [activeSection, setActiveSection] = useState('general');
    const uiColor = useSelector((state) => state.uiColor);

    const togglePopup = () => {
        close();
    };
    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
        setColorModalShown(false);
    };
    return (
        <React.Fragment>
            {createPortal(
                <Backdrop />,
                document.getElementById("backdrop")
            )}
            <div id="popup" style={{ backgroundColor, borderColor: uiColor }}>
                <div className="header">
                    <h1 style={{ color: uiColor }}>Settings</h1>
                    <CancelIcon style={{ fontSize: '30px', color: uiColor }} onClick={togglePopup} />
                </div>
                <div className="settings-body">
                    <nav className="sidebar">
                        <ul>
                            <a
                                href="#general"
                                className={activeSection === 'general' ? 'active' : ''}
                                onClick={() => handleSectionChange('general')}
                            >
                                language
                            </a>
                            <a
                                href="#theme"
                                className={activeSection === 'theme' ? 'active' : ''}
                                onClick={() => handleSectionChange('theme')}
                            >
                                theme
                            </a>
                        </ul>
                    </nav>

                    <div className="content">
                        <div
                            id="general"
                            className={`content-section ${activeSection === 'general' ? '' : 'hidden'}`}
                        >
                            <div style={{ display: 'flex', gap: '30px', width: '100%', }}>
                                <h3>select language :</h3>
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
                            <h3 style={{ margin: '23px 0px 10px 23px' }}>select theme :</h3>
                            <Mode />
                            <div style={{ margin: '23px 0px 0px 23px', display: 'flex', gap: '20px' }}>
                                <h3>change text color :</h3>
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
            </div>
        </React.Fragment>
    );
}
export default Setting;