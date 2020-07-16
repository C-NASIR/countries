/* eslint-disable no-undef */
import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { checker } from "../../Utils/index";

const setUp = (props) => shallow(<App {...props} />);

//describe
describe("App component", () => {
  let comp = "";
  beforeEach(() => {
    comp = setUp("name");
  });

  it("should return the app component", () => checker(comp, "app", expect));
});
