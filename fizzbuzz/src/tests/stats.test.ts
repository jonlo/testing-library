import { convertNumber } from "../fizzbuzz";

describe("Convert number should", () => {
  it("number 1 should be 1", () => {
    const result = convertNumber(1);
    const expected = '1';
    expect(expected).toBe(result);
  });

  it("number 3 should be fizz", () => {
    const result = convertNumber(3);
    const expected = 'fizz';
    expect(expected).toBe(result);
  });

  it("number 5 should be buzz", () => {
    const result = convertNumber(5);
    const expected = 'buzz';
    expect(expected).toBe(result);
  });

  it("number 15 should be fizzbuzz", () => {
    const result = convertNumber(15);
    const expected = 'fizzbuzz';
    expect(expected).toBe(result);
  });

  it("number 0 should be 'fizzbuzz'", () => {
    const result = convertNumber(0);
    const expected = 'fizzbuzz';
    expect(expected).toBe(result);
  });


});

