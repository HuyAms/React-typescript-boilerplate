import * as React from "react";
import {withNamespaces, WithNamespaces} from "react-i18next";

interface Props extends WithNamespaces {
  t: any;
}

class About extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <h2>{this.props.t("common.about")}</h2>
      </div>
    );
  }
}

export default withNamespaces(["common"])(About);
