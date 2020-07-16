/* eslint-disable no-undef */
import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { checker } from "../../../Utils/index";

const setUp = (props) => shallow(<Header {...props} />);

describe("Header component", () => {
  let comp;
  beforeEach(() => {
    comp = setUp();
  });

  it("should render header", () => checker(comp, "header", expect));
  it("should render the search input", () => checker(comp, "search", expect));
});
