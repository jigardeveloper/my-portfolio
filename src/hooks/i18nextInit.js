import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../Data/locales/en/translation.json";
import translationGJ from "../Data/locales/gj/translation.json";
import translationHi from "../Data/locales/hi/translation.json";

const fallbackLng = ["gj"];
const availableLanguages = ["en", "gj"];

const resources = {
  en: {
    translation: translationEN,
  },
  gj: {
    translation: translationGJ,
  },
  hi: {
    translation: translationHi,
  },
};

const lng = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // .setDefaultNamespace("en")
  .init({
    resources,
    fallbackLng,
    lng: lng,

    detection: {
      checkWhitelist: true, //true
    },
    localePath: " ",
    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });
// i18next.on("initialized", function (options) {
//   i18next.changeLanguage("fr");
//   console.log("initialized called");
// });
// i18next.on("loaded", function (loaded) {
//   i18next.changeLanguage("fr");
//   console.log("initialized called");
// });
// i18next.changeLanguage("fr");
// i18next.changeLanguage(localStorage.getItem("i18nextLng"));
export const languageMap = [
  { label: "English", value: "en" },
  { label: "हिंदी", value: "hi" },
  { label: "ગુજરાતી", value: "gj" },
];

export default i18n;
