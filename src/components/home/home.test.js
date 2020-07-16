/* eslint-disable no-undef */
import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";
import { checker, checkProps } from "../../../Utils/index";

const setUp = (props) => shallow(<Home {...props} />);

describe("Home Component", () => {
  describe("Checking proptypes", () => {
    it("should not throw an error", () => {
      const expectedProps = {
        name: "cdcndcdc",
        flag: "https://restcountries.eu/data/usa.svg",
        region: "dcnscknsjc",
        capital: "sxsxs",
        demonym: "xsjxnsxs",
        subregion: "dcbshbcsdcsc",
        population: 48484884,
        area: 8478474,
        latitude: 474,
        longitude: 47474,
      };
      const propError = checkProps(Home, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe("component rendering", () => {
    let comp;
    beforeEach(() => {
      const country = { name: "usa", flag: "randomFlag" };
      comp = setUp(country);
    });

    it("should render home component", () => checker(comp, "home", expect));
    it("should render heade component", () => checker(comp, "header", expect));
    it("should render main component", () => checker(comp, "main", expect));
    it("should render info component", () => checker(comp, "info", expect));
    it("should render stats component", () => checker(comp, "stats", expect));
  });
});
