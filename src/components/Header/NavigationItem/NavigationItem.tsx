import * as React from "react";
import {NavLink} from "react-router-dom";

interface Props {
  children: any;
  link: string;
  exact?: boolean;
}

const navigationItem = (props: Props) => {
  return (
    <li>
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
