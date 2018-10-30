import * as React from "react";
import i18n from "../../i18n";
import {translate} from "react-i18next";

interface Props {
  t: any;
}

class About extends React.Component<Props, any> {
  changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  render() {
    const {t} = this.props;

    return (
      <div>
        <button onClick={() => this.changeLanguage("de")}>de</button>
        <button onClick={() => this.changeLanguage("en")}>en</button>
        <h2>{t("Welcome to React")}</h2>
      </div>
    );
  }
}

export default translate(["common"], {wait: true, nsMode: "fallback"})(About);
