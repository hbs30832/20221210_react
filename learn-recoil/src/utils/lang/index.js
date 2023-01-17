import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";

const resources = {
  en,
  ko,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
});
