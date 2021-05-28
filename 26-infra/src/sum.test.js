import { sum } from "./sum";

describe("sum()", () => {
  it("should work", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
