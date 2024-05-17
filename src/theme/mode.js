import "./mode.css";
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/theme";
import DoneIcon from '@mui/icons-material/Done';
import ContrastIcon from '@mui/icons-material/Contrast';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Mode = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode);
    const iconIndex = useMemo(() => {
        switch (mode) {
            case 'dark':
                return 1;
            case 'mid-dark':
                return 2;
            default:
                return 0;
        }
    }, [mode]);

    useEffect(() => {
        const listItems = document.querySelectorAll(".modeItem");
        listItems.forEach((item, index) => {
            item.classList.remove("activeMode");
            if (index === iconIndex) {
                item.classList.add("activeMode");
            }
        });
    }, [iconIndex]);

    const handleModeChange = (mode) => {
        dispatch(themeActions.setMode(mode));
    };

    return (
        <div className="dropdown" style={{ display: "flex" }}>
            <li className="modeItem" onClick={() => handleModeChange("light")}>
                <LightModeIcon />
                Light
                {iconIndex === 0 && <DoneIcon />}
            </li>
            <li className="modeItem" onClick={() => handleModeChange("dark")}>
                <DarkModeIcon />
                Dark
                {iconIndex === 1 && <DoneIcon />}
            </li>
            <li className="modeItem" onClick={() => handleModeChange("mid-dark")}>
                <ContrastIcon />
                Blue
                {iconIndex === 2 && <DoneIcon />}
            </li>
        </div>
    );
};
export default React.memo(Mode);