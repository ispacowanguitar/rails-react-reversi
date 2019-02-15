import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Game from "../Game";

configure({ adapter: new Adapter() });
describe("<Game />", () => {
  it("renders", () => {
    const wrapper = shallow(<Game />);
  });
});
