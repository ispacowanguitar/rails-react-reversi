import React from "react";
import { shallow } from "enzyme";
import Game from "components/Game";

describe("<Game />", () => {
  it("Renders a square component", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find("Square").length).toBe(1);
  });
});
