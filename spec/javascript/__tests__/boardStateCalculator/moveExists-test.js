import moveExists from "boardStateCalculator/moveExists";

describe("moveExists", () => {
  describe("when a move exists", () => {
    it("returns true", () => {
      const state = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "wh", "wh", "wh", "wh"],
        [null, null, null, "wh", "wh", "wh", "wh", "wh"],
        [null, null, null, "bl", "bl", "bl", "bl", "bl"],
        [null, null, null, "wh", "bl", "bl", "bl", null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const result = moveExists(state, "bl");

      expect(result).toBe(true);
    });
  });
  describe("when a move does not exist", () => {
    it("returns false", () => {
      const state = [
        ["wh", "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        [null, "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        [null, "wh", "wh", "wh", "wh", "wh", "wh", "wh"],
        [null, null, null, "bl", "bl", "bl", "bl", "bl"],
        [null, "bl", "bl", "bl", "bl", "bl", "bl", null],
        [null, null, null, "bl", "bl", "bl", "bl", "bl"],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const result = moveExists(state, "bl");

      expect(result).toBe(false);
    });
  });
});
