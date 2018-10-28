import * as React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const header = () => {
  return (
    <nav>
      <ul>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
      </ul>
    </nav>
  );
};

export default header;
