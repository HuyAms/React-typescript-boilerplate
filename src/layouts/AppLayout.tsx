import * as React from "react";
import Header from "../components/Header/Header";

interface Props {
  children: any;
}

const appLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default appLayout;
