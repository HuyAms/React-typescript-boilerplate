import React from "react";
import {shallow} from "enzyme";
import sinon from "sinon";
import Button from "../Button";

const buttonText = "Test Button";

const setup = (props?: any) =>
  shallow(<Button {...props}>{buttonText}</Button>);

describe("Button", () => {
  it("should render Button with correct style", () => {
    const props = {
      className: "additionalClass",
    };

    const renderButton = setup(props);

    expect(renderButton.hasClass("button")).toEqual(true);
    expect(renderButton.hasClass("additionalClass")).toEqual(true);
  });

  it("should render Button with correct text", () => {
    const renderButton = setup();

    expect(renderButton.text()).toEqual(buttonText);
  });

  it("should handle click event", () => {
    const onClick = sinon.spy();

    const renderButton = setup({onClick});

    renderButton.find("button").simulate("click");
    expect(onClick.calledOnce).toEqual(true);
  });
});
