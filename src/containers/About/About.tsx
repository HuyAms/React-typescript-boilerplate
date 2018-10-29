import * as React from "react";
import i18n from "../../i18n";
import {withNamespaces} from "react-i18next";

class About extends React.Component<any, any> {
  changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeLanguage("de")}>de</button>
        <button onClick={() => this.changeLanguage("en")}>en</button>
        <h2>{this.props.t("Welcome to React")}</h2>
      </div>
    );
  }
}

export default withNamespaces()(About);
