/* eslint-disable no-undef */
import React from "react";
import Info from "./Info";
import { shallow } from "enzyme";
import { checker, checkProps } from "../../../Utils/index";

const setUp = (props) => shallow(<Info {...props} />);

describe("Info component", () => {
  let comp;
  beforeEach(() => {
    comp = setUp();
  });

  it("should render info component", () => checker(comp, "info", expect));
  it("should not throw an error", () => {
    const expectedProps = {
      name: "USA",
      capital: "washington, DC",
      region: "America",
      demonym: "American",
      subregion: "North America",
    };
    const propErrors = checkProps(Info, expectedProps);
    expect(propErrors).toBeUndefined();
  });
});
