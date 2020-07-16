/* eslint-disable no-undef */
import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";
import { checker } from "../../../Utils/index";

const setUp = (props) => shallow(<Home {...props} />);

describe("Home component", () => {
  let comp;
  beforeEach(() => {
    comp = setUp();
  });

  it("should render home component", () => checker(comp, "home", expect));
  it("should render heade component", () => checker(comp, "header", expect));
  it("should render main component", () => checker(comp, "main", expect));
  it("should render info component", () => checker(comp, "info", expect));
  it("should render stats component", () => checker(comp, "stats", expect));
});
