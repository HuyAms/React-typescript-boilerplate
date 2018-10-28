import * as React from "react";

interface Props {
  children: any;
}

const appLayout = (props: Props) => {
  return (
    <div>
      <header>
        <p>This is the header sections</p>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default appLayout;
