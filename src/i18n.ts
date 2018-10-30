import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import {reactI18nextModule} from "react-i18next";
import resBundler from "i18next-resource-store-loader!./locales/index";

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: resBundler,
    lng: "en",

    // keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
      nsMode: "fallback",
    },
  });

export default i18n;
