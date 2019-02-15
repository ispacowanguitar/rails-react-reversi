import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Game from "components/Game";

configure({ adapter: new Adapter() });
describe("<Game />", () => {
  it("Renders a square component", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find("Square").length).toBe(1);
  });
});
