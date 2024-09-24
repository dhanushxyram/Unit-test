import { add } from "../math";

describe("Calculates the sum of a list of numbers", () => {
  it("return 0 for an empty array", () => {
    const result = add([]);
    expect(result).toBe(0);
  });


  it("return the sum for an array with a single element", () => {
    const result = add([5]);
    expect(result).toBe(5);
  });

  it("handle negative numbers correctly", () => {
    const result = add([-1, -2, -3]);
    expect(result).toBe(-6);
  });


  it("handle decimal numbers correctly", () => {
    const result = add([1.5, 2.5, 3]);
    expect(result).toBe(7);
  });

  it("should handle a mix of positive and negative numbers", () => {
    const result = add([1, -2, 3, -4]);
    expect(result).toBe(-2);
  });

  it("should return 0 if the array contains only zeroes", () => {
    const result = add([0, 0, 0]);
    expect(result).toBe(0);
  });
});
