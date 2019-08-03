import React from "react";
import { mount } from "enzyme";
import GameInfo from "components/GameInfo";

describe("<GameInfo />", () => {
  it("displays the score", () => {
    const wrapper = mount(
      <GameInfo currentTeamsColor="bl" score={{ bl: 2, wh: 2 }} />
    );
    expect(wrapper.text()).toContain("Black: 2");
    expect(wrapper.text()).toContain("White: 2");
  });

  it("shows a pointer next to the current players turn", () => {
    const wrapper = mount(
      <GameInfo currentTeamsColor="bl" score={{ bl: 2, wh: 2 }} />
    );
    expect(wrapper.text()).toContain("▶ Black: 2 ◀");
    expect(wrapper.text()).toContain("White: 2");
  });
});
