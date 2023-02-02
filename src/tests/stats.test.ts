import { sum, average } from "../stats";

describe("Stats should", () => {
  it("sum of [1, 2, 3] should be 6", () => {
    const result = sum([1, 2, 3]);
    const expected = 6;
    expect(expected).toBe(result);
  });

  it("average of [1, 2, 3] should be 2", () => {
    const result = average([1, 2, 3]);
    const expected = 2;
    expect(expected).toBe(result);
  });
});

