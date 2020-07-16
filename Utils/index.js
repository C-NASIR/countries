import checkPropTypes from "check-prop-types";

export const findByTestAttr = (component, attr) =>
  component.find(`[data-test='${attr}']`);

export const checker = (component, attr, expect) => {
  const wrapper = findByTestAttr(component, attr);
  expect(wrapper.length).toBe(1);
};

export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, "props", component.name);
