/* eslint-disable no-undef */
import React from "react";
import Main from "./Main";
import { shallow } from "enzyme";
import { checker, checkProps } from "../../../Utils/index";

const setUp = (props) => shallow(<Main {...props} />);

describe("Main component", () => {
  let comp;
  beforeEach(() => {
    comp = setUp();
  });

  it("should render main component", () => checker(comp, "main", expect));
  it("should not throw an error", () => {
    const expectedProps = {
      flag: "flaglogo",
      name: "cdjcndc",
    };
    const propError = checkProps(Main, expectedProps);
    expect(propError).toBeUndefined();
  });
});
