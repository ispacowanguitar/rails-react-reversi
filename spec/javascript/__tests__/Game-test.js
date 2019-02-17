import React from "react";
import { shallow, mount } from "enzyme";
import Game from "components/Game";

describe("<Game />", () => {
  describe("On page load", () => {
    it("Renders 64 squares", () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.find("Square").length).toBe(64);
    });

    it("Sets up the board correctly", () => {
      const wrapper = mount(<Game />);
      expect(wrapper.find("img").length).toBe(4);
      expect(wrapper.find("Square").get(27).props.chip).toBe("white");
      expect(wrapper.find("Square").get(28).props.chip).toBe("black");
      expect(wrapper.find("Square").get(35).props.chip).toBe("black");
      expect(wrapper.find("Square").get(36).props.chip).toBe("white");
    });
  });
});
