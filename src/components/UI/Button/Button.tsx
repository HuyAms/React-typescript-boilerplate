import * as React from "react";
import classes from "./Button.scss";

interface Props {
  children: string;
  className?: string;
  onClick: any;
}

const button = (props: Props) => {
  const {children, onClick, className} = props;

  const buttonClasses = [classes.button, className];

  return (
    <button className={buttonClasses.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default button;
