import React from "react";
import { mount } from "enzyme";
import Game from "components/Game";
import { Provider } from "react-redux";
import { createStore } from "redux";
import gameReducer from "redux/reducer";

const mountWithRedux = (Component, state = false) => {
  if (state) {
    const store = createStore(gameReducer, state);
    return mount(<Provider store={store}>{Component}</Provider>);
  } else {
    const store = createStore(gameReducer);
    return mount(<Provider store={store}>{Component}</Provider>);
  }
};

describe("<Game />", () => {
  describe("On page load", () => {
    it("Renders 64 squares", () => {
      const wrapper = mountWithRedux(<Game />);
      expect(wrapper.find("Square").length).toBe(64);
    });

    it("Sets up the board correctly", () => {
      const wrapper = mountWithRedux(<Game />);
      expect(wrapper.find("img").length).toBe(4);
      expect(wrapper.find("Square").get(27).props.chip).toBe("wh");
      expect(wrapper.find("Square").get(28).props.chip).toBe("bl");
      expect(wrapper.find("Square").get(35).props.chip).toBe("bl");
      expect(wrapper.find("Square").get(36).props.chip).toBe("wh");
    });

    it("displays the score", () => {
      const wrapper = mountWithRedux(<Game />);
      expect(wrapper.find("GameInfo").text()).toContain("Black: 2");
      expect(wrapper.find("GameInfo").text()).toContain("White: 2");
    });

    it("shows a pointer next to the current players turn", () => {
      const wrapper = mountWithRedux(<Game />);
      expect(wrapper.find("GameInfo").text()).toContain("▶ Black: 2 ◀");
      expect(wrapper.find("GameInfo").text()).toContain("White: 2");
    });
  });

  describe("Turn one (black first)", () => {
    describe("When a valid square is clicked", () => {
      it("puts a new black chip down and flips the sandwiched piece", () => {
        const wrapper = mountWithRedux(<Game />);
        const validSquare = wrapper.find("Square").get(26);

        validSquare.props.onSquareClick();
        wrapper.update();

        expect(wrapper.find("Square").get(26).props.chip).toBe("bl");
        expect(wrapper.find("Square").get(27).props.chip).toBe("bl");
      });

      it("changes whose turn it is", () => {
        const wrapper = mountWithRedux(<Game />);
        const validSquare = wrapper.find("Square").get(26);

        validSquare.props.onSquareClick();
        wrapper.update();

        expect(wrapper.find("GameInfo").text()).toContain("Black: 4");
        expect(wrapper.find("GameInfo").text()).toContain("▶ White: 1 ◀");
      });

      it("shows the updated score", () => {
        const wrapper = mountWithRedux(<Game />);
        const validSquare = wrapper.find("Square").get(26);

        validSquare.props.onSquareClick();
        wrapper.update();

        expect(wrapper.find("GameInfo").text()).toContain("White: 1");
        expect(wrapper.find("GameInfo").text()).toContain("Black: 4");
      });
    });

    describe("when an invalid square is clicked", () => {
      it("does not place a chip on that square", () => {
        const wrapper = mountWithRedux(<Game />);
        const invalidSquare = wrapper.find("Square").get(0);

        invalidSquare.props.onSquareClick();

        expect(wrapper.find("img").length).toBe(4);
        expect(wrapper.find("Square").get(0).props.chip).toBe(null);
      });

      it("does not change whose turn it is", () => {
        const wrapper = mountWithRedux(<Game />);
        const invalidSquare = wrapper.find("Square").get(0);
        const validSquare = wrapper.find("Square").get(26);

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
      const wrapper = mountWithRedux(<Game />);
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
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", null]
      ];
      const wrapper = mountWithRedux(<Game />, {
        board: { current: state, previous: [] },
        currentTeamsColor: "bl"
      });
      const clickedSquare = wrapper.find("Square").get(63);

      clickedSquare.props.onSquareClick();
      wrapper.update();

      expect(wrapper.find("Confetti").length).toBe(1);
    });
  });
  describe("when the game is not over", () => {
    it("does not show confetti", () => {
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
      const wrapper = mountWithRedux(<Game />).setState({
        board: state,
        currentTeamsColor: "wh"
      });

      wrapper.update();

      expect(wrapper.find("Confetti").length).toBe(0);
    });
  });

  describe("undo button", () => {
    it("doesnt break the page if there is nothing to undo", () => {
      const wrapper = mountWithRedux(<Game />);

      wrapper
        .find("#undoButton")
        .props()
        .onClick();
    });

    it("sets the state to the previous state", () => {
      const previousState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, null, "bl", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      const currentState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, null, "bl", "bl", "bl", null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      const wrapper = mountWithRedux(<Game />, {
        board: { current: currentState, previous: [previousState], future: [] },
        currentTeamsColor: "bl"
      });

      wrapper
        .find("#undoButton")
        .props()
        .onClick();
      wrapper.update();

      expect(wrapper.find("Game").props().board).toBe(previousState);
    });
  });
});
