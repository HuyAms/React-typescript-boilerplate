import * as React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import reactImg from "../../assets/react.png";
import classes from "./Header.scss";
import i18n from "../../i18n";
import {withNamespaces, WithNamespaces} from "react-i18next";

const changeLanguage = (e: any) => {
  i18n.changeLanguage(e.target.value);
};

interface IProps extends WithNamespaces {
  t: any;
}

const header = (props: IProps) => {
  const {t} = props;

  return (
    <div className={classes.header}>
      <div className={classes.header__banner}>
        <img className={classes.header__logo} src={reactImg} alt="React Icon" />
        <h1>{t("common.welcome")}</h1>
      </div>
      <nav>
        <ul className={classes.header__nav}>
          <NavigationItem link="/" exact={true}>
            {t("common.home")}
          </NavigationItem>
          <NavigationItem link="/about">{t("common.about")}</NavigationItem>
        </ul>
      </nav>
      <div className={classes.header__localize}>
        <select onChange={changeLanguage}>
          <option value="en">{t("common.en")}</option>
          <option value="fi">{t("common.fi")}</option>
        </select>
      </div>
    </div>
  );
};

export default withNamespaces(["common"])(header);
