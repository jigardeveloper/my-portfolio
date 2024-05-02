import { TransitionGroup } from "react-transition-group";
import "./app.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./hooks/i18nextInit";
import { t } from "i18next";

//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";
import Typewriter from "typewriter-effect/dist/core";
import GetInTouch from "./components/Get In Touch/GetInTouch";

const App = () => {
  const { i18n } = useTranslation();
  const theme = useSelector((state) => state.theme);
  const [btnText, setBtnText] = useState("");
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("i18nextLng")
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
    setBtnText(t("Message.SendMSG"));
    handleTyper();
  }, [i18n, selectedLang, setSelectedLang]);

  function handleTyper() {
    let textItems = t("Home.autoTypeData", { returnObjects: true });
    var autoTyper = document.getElementById("typer");
    new Typewriter(autoTyper, {
      strings: textItems,
      autoStart: true,
      pauseFor: 1000,
      loop: true,
    });
  }

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Alex+Brush&family=Barlow+Condensed:wght@300&family=Bellefair&family=Changa:wght@500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {      
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="App" style={theme}>
      <Navbar setSelectedLang={setSelectedLang} selectedLang={selectedLang} />
      <div className="app-content">
        <TransitionGroup>
          <Home handleTyper={handleTyper()} />
          <AboutMe />
          <Education />
          <Projects />
          <GetInTouch btnText={btnText} setBtnText={setBtnText} />
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
};
export default App;
