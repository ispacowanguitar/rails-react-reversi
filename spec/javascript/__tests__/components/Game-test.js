import React from "react";
import { mount } from "enzyme";
import Game from "components/Game";

describe("<Game />", () => {
  describe("On page load", () => {
    it("Renders 64 squares", () => {
      const wrapper = mount(<Game />);
      expect(wrapper.find("Square").length).toBe(64);
    });

    it("Sets up the board correctly", () => {
      const wrapper = mount(<Game />);
      expect(wrapper.find("img").length).toBe(4);
      expect(wrapper.find("Square").get(27).props.chip).toBe("wh");
      expect(wrapper.find("Square").get(28).props.chip).toBe("bl");
      expect(wrapper.find("Square").get(35).props.chip).toBe("bl");
      expect(wrapper.find("Square").get(36).props.chip).toBe("wh");
    });

    it("displays whose turn it is", () => {
      const wrapper = mount(<Game />);
      expect(wrapper.text()).toContain("Turn: black");
    });

    it("displays the score", () => {
      const wrapper = mount(<Game />);
      expect(wrapper.text()).toContain("Black: 2");
      expect(wrapper.text()).toContain("White: 2");
    });
  });

  describe("Turn one (black first)", () => {
    describe("When a valid square is clicked", () => {
      it("puts a new black chip down and flips the sandwiched piece", () => {
        const wrapper = mount(<Game />);
        const validSquare = wrapper.find("Square").get(26);

        validSquare.props.onSquareClick();
        wrapper.update();

        expect(wrapper.find("Square").get(26).props.chip).toBe("bl");
        expect(wrapper.find("Square").get(27).props.chip).toBe("bl");
      });

      it("changes whose turn it is", () => {
        const wrapper = mount(<Game />);
        const validSquare = wrapper.find("Square").get(26);

        validSquare.props.onSquareClick();
        wrapper.update();

        expect(wrapper.text()).toContain("Turn: white");
      });

      it("shows the updated score", () => {
        const wrapper = mount(<Game />);
        const validSquare = wrapper.find("Square").get(26);

        validSquare.props.onSquareClick();
        wrapper.update();

        expect(wrapper.text()).toContain("White: 1");
        expect(wrapper.text()).toContain("Black: 4");
      });
    });

    describe("when an invalid square is clicked", () => {
      it("does not place a chip on that square", () => {
        const wrapper = mount(<Game />);
        const invalidSquare = wrapper.find("Square").get(0);

        invalidSquare.props.onSquareClick();

        expect(wrapper.find("img").length).toBe(4);
        expect(wrapper.find("Square").get(0).props.chip).toBe(null);
      });

      it("does not change whose turn it is", () => {
        const wrapper = mount(<Game />);
        const invalidSquare = wrapper.find("Square").get(0);
        const validSquare = wrapper.find("Square").get(26);
        cckonsole.log(wrapper.debug());

        invalidSquare.props.onSquareClick();
        validSquare.props.onSquareClick();

        expect(wrapper.update().find("img").length).toBe(5);
      });
    });
  });

  describe("when there are no valid turns for the next player", () => {
    it("skips their turn", () => {
      const state = [
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        [null, null, "bl", "wh", "wh", "wh", "wh", "wh"],
        [null, "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        [null, null, null, "bl", "bl", "bl", "bl", "bl"],
        [null, "bl", "bl", "bl", "bl", "bl", "bl", null],
        [null, null, null, "bl", "bl", "bl", "bl", "bl"],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      const wrapper = mount(<Game />);
      wrapper.setState({ board: state, currentTeamsColor: "wh" });
      const clickedSquare = wrapper.find("Square").get(9);

      clickedSquare.props.onSquareClick();

      expect(wrapper.state("currentTeamsColor")).toBe("wh");
    });
  });

  describe("when the game is over", () => {
    it("shows confetti", () => {
      const state = [
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        ["wh", "wh", "bl", "wh", "wh", "wh", "wh", "wh"],
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        ["wh", "wh", "wh", "bl", "bl", "bl", "bl", "bl"],
        ["wh", "bl", "bl", "bl", "bl", "bl", "bl", "wh"],
        ["wh", "wh", "wh", "bl", "bl", "bl", "bl", "bl"],
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"]
      ];
      const wrapper = mount(<Game />).setState({
        board: state,
        currentTeamsColor: "wh"
      });
      wrapper.update();

      expect(wrapper.find("Confetti").length).toBe(1);
    });
  });
  describe("when the game is not over", () => {
    it.only("shows confetti", () => {
      const state = [
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        ["wh", "wh", "bl", "wh", "wh", "wh", "wh", "wh"],
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        ["wh", "wh", "wh", "bl", "bl", "bl", "bl", "bl"],
        ["wh", "bl", "bl", "bl", "bl", "bl", "bl", "wh"],
        ["wh", "wh", "wh", "bl", "bl", "bl", "bl", "bl"],
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", null]
      ];
      const wrapper = mount(<Game />).setState({
        board: state,
        currentTeamsColor: "wh"
      });

      wrapper.update();

      expect(wrapper.find("Confetti").length).toBe(0);
    });
  });
});
