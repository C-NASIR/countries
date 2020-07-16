/* eslint-disable no-undef */
import React from "react";
import Stats from "./Stats";
import { shallow } from "enzyme";
import { checker, checkProps } from "../../../Utils/index";

const setUp = (props) => shallow(<Stats {...props} />);

//describe
describe("stats component", () => {
  let comp;
  beforeEach(() => {
    comp = setUp();
  });

  it("should render stats component", () => checker(comp, "stats", expect));
  it("should not throw an error", () => {
    const expectedProps = {
      name: "Hello",
      population: 12,
      area: 8383,
      latitude: 3,
      longitude: 3,
    };
    const propsError = checkProps(Stats, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
