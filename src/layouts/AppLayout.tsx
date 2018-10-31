import * as React from "react";
import Header from "../components/Header/Header";
import classes from "./AppLayout.scss";

interface IProps {
  children: any;
}

const appLayout = (props: IProps) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className={classes.mainLayout}>{props.children}</main>
    </div>
  );
};

export default appLayout;
