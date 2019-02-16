import React from "react";
import { shallow } from "enzyme";
import Game from "components/Game";

describe("<Game />", () => {
  it("Renders 64 squares", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find("Square").length).toBe(64);
  });
});
