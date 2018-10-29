import * as React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import reactImg from "../../assets/react.png";
import classes from "./Header.scss";

const header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.banner}>
        <img className={classes.logo} src={reactImg} alt="React Icon" />
        <h1>Welcome to React Typescript Boilerplate</h1>
      </div>
      <nav>
        <ul className={classes.mainNav}>
          <NavigationItem link="/" exact={true}>
            Home
          </NavigationItem>
          <NavigationItem link="/about">About</NavigationItem>
        </ul>
      </nav>
    </div>
  );
};

export default header;
