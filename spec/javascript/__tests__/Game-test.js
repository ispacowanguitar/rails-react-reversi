import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Game from "reversiApp/components/Game";

configure({ adapter: new Adapter() });
describe("<Game />", () => {
  it("Renders a ", () => {
    const wrapper = shallow(<Game />);
    expect(1).toEqual(1);
  });
});
