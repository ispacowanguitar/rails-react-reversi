import React from "react";
import { shallow } from "enzyme";
import Square from "components/Square";

describe("<Square />", () => {
  it("can be empty", () => {
    const wrapper = shallow(<Square />);
    expect(wrapper.find("img").length).toBe(0);
  });

  it("can render a black chip", () => {
    const wrapper = shallow(<Square chip="bl" />);
    expect(wrapper.find("img").length).toBe(1);
  });

  it("can render a white chip", () => {
    const wrapper = shallow(<Square chip="wh" />);
    expect(wrapper.find("img").length).toBe(1);
  });
});
